import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { content } from '../data/contents';
import Footer from './Footer';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface InquiriesProps {
    isDarkMode: boolean;
}

// Dataset instance for inquiries section
const { inquiries } = content;

const Inquiries: React.FC<InquiriesProps> = ({ isDarkMode }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setSubmitError(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Failed to send message');
            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Failed to send message');
        }
    }
    // Create a submission handler with proper typing
    const onFormSubmit = handleSubmit(onSubmit);

    return (
        <section id="inquiries" className="scroll-section items-center md:my-20 px-10 py-20 snap-always w-screen h-screen flex-shrink-0 flex flex-col overflow-y-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pb-14">
                {/* Contact Form */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h4 className='font-[kanit] font-semibold lowercase mb-8 text-left scale-y-90 text-2xl max-w-2xl w-full'>Inquiries</h4>
                        <p className={`${isDarkMode ? "text-white" : "text-gray-700"}text-gray-600 font-inter transition-colors duration-300`}>
                            Have a question or want to work together? Drop me a message!
                        </p>
                    </div>
                    {/*Correct way to type async submissions*/}
                    <form onSubmit={(e) => { e.preventDefault(); onFormSubmit(e).catch(() => { }) }} className="space-y-6">
                        <div>
                            <label htmlFor="name" className={`${isDarkMode ? "text-white" : "text-gray-700"} block text-sm font-inter font-medium transition-colors duration-300`}>
                                Name
                            </label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                className={`${isDarkMode ? "text-white bg-gray-600" : "text-gray-800 bg-gray-300"} mt-1 block py-2 w-full rounded-md text-sm border-gray-300 font-inter shadow-sm focus:border-gray-500 focus:ring-gray-500`}
                            />
                            {errors.name && (
                                <p className="mt-1 font-inter text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className={`${isDarkMode ? "text-white" : "text-gray-700"} block text-sm font-inter font-medium text-gray-700 transition-colors duration-300`}>
                                Email
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className={`${isDarkMode ? "text-white bg-gray-600" : "text-gray-800 bg-gray-300"} mt-1 block py-2 w-full rounded-md text-sm border-gray-300 font-inter shadow-sm focus:border-gray-500 focus:ring-gray-500`}
                            />
                            {errors.email && (
                                <p className="mt-1 font-inter text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="subject" className={`${isDarkMode ? "text-white" : "text-gray-700"} block text-sm font-inter font-medium text-gray-700 transition-colors duration-300`}>
                                Subject
                            </label>
                            <input
                                {...register('subject', { required: 'Subject is required' })}
                                className={`${isDarkMode ? "text-white bg-gray-600" : "text-gray-800 bg-gray-300"} mt-1 block py-2 w-full rounded-md text-sm border-gray-300 font-inter shadow-sm focus:border-gray-500 focus:ring-gray-500`}
                            />
                            {errors.subject && (
                                <p className="mt-1 font-inter text-sm text-red-600">{errors.subject.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className={`${isDarkMode ? "text-white" : "text-gray-700"} block text-sm font-inter font-medium text-gray-700`}>
                                Message
                            </label>
                            <textarea
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: {
                                        value: 20,
                                        message: 'Message must be at least 20 characters',
                                    },
                                })}
                                rows={3}
                                className={`${isDarkMode ? "text-white bg-gray-600" : "text-gray-800 bg-gray-300"} mt-1 block w-full rounded-md font-inter text-sm border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500`}
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm font-inter text-red-600">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gray-600 text-white font-inter py-3 px-6 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitError && (
                            <p className="mt-2 text-sm font-inter text-red-600">{submitError}</p>
                        )}

                        {submitSuccess && (
                            <p className="mt-2 text-sm font-inter text-green-600">
                                Message sent successfully!
                            </p>
                        )}
                    </form>
                </div>

                {/* Image Section */}
                <div className="hidden md:flex items-center justify-center">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                        {isDarkMode ?
                            <img
                                src={inquiries.image[0].src}
                                alt={inquiries.image[0].alt}
                                title={inquiries.image[0].title}
                                className={inquiries.image[0].className}
                            /> :
                            <img
                                src={inquiries.image[1].src}
                                alt={inquiries.image[1].alt}
                                title={inquiries.image[1].title}
                                className={inquiries.image[1].className}
                            />}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default Inquiries;