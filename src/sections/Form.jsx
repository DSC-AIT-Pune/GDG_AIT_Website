import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle, XCircle, X } from 'lucide-react'

const Toast = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 left-4 right-4 z-[9999] flex justify-center md:left-auto md:right-6 md:justify-end">
            <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-sm transform transition-all duration-500 hover:scale-105 w-full max-w-md ${
                type === 'success' 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300 text-green-900 shadow-green-200/50' 
                    : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-300 text-red-900 shadow-red-200/50'
            } animate-in slide-in-from-top duration-500`}>
                <div className={`p-2 rounded-full ${
                    type === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                    {type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                    )}
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">{type === 'success' ? 'Success!' : 'Error!'}</p>
                    <p className="text-sm opacity-90">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className={`p-2 rounded-full hover:scale-110 transition-all duration-200 ${
                        type === 'success' 
                            ? 'hover:bg-green-200 text-green-600' 
                            : 'hover:bg-red-200 text-red-600'
                    }`}
                    aria-label="Close notification"
                >
                    <X className="w-4 h-4" />
                </button>
                
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 rounded-b-2xl animate-pulse"></div>
            </div>
        </div>
    );
};

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        branch: '',
        reg: '',
        phone: '',
        priority: '',
        reason: '',
        domain: '',
        bestProject: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [toast, setToast] = useState(null)

    const showToast = (type, message) => {
        setToast({ type, message });
    };

    const hideToast = () => {
        setToast(null);
    };

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.branch) newErrors.branch = 'Please select your branch'
        if (!formData.reg.trim()) {
            newErrors.reg = 'Registration number is required'
        } else if (!/^\d+$/.test(formData.reg)) {
            newErrors.reg = 'Registration number must contain only numbers'
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required'
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits'
        }
        if (!formData.priority.trim()) {
            newErrors.priority = 'Priority is required'
        } else if (!/^[1-5]$/.test(formData.priority)) {
            newErrors.priority = 'Priority must be between 1-5'
        }
        if (!formData.reason.trim()) {
            newErrors.reason = 'Please tell us why you want to join'
        } else if (formData.reason.trim().length < 20) {
            newErrors.reason = 'Please provide at least 20 characters'
        }
        if (!formData.domain.trim()) newErrors.domain = 'Domain is required'
        if (!formData.bestProject.trim()) {
            newErrors.bestProject = 'Project link is required'
        } else if (!/^https?:\/\/.+/.test(formData.bestProject)) {
            newErrors.bestProject = 'Please enter a valid URL'
        }

        return newErrors
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async () => {
        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            // Scroll to top to show validation errors
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return
        }

        setIsSubmitting(true)
        // Immediately scroll to top when form submission starts
        window.scrollTo({ top: 0, behavior: 'smooth' });

        try {
            const response = await fetch('https://gdgbackend-2mfw.onrender.com/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            showToast('success', 'Form submitted successfully!');
            
            // Navigate to home after toast completes (4.5 seconds to ensure toast is seen)
            setTimeout(() => {
                window.history.back();
            }, 4500);
        } catch (error) {
            console.error('Error submitting form:', error);
            showToast('error', 'There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className='formBody min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4'>
            {toast && (
                <Toast 
                    type={toast.type} 
                    message={toast.message} 
                    onClose={hideToast} 
                />
            )}
            
            <div className="max-w-4xl mx-auto">
                <nav className="mb-8">
                    <button 
                        onClick={() => window.history.back()} 
                        aria-label="Go back to previous page"
                        className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-md border border-gray-200 text-gray-700 hover:text-gray-900 hover:shadow-lg transition-all duration-200 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                        <span className="text-sm md:text-base font-semibold">Back</span>
                    </button>
                </nav>

                <header className="mb-12">
                    <h1 className="text-center font-seconday text-[clamp(1.75rem,8vw,6rem)] z-10 text-[#4285F4] mt-0 pt-8 leading-[1.05] select-none break-words font-black">
                        FILL YOUR DATA
                    </h1>
                </header>

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="h-2 "></div>

                    <div className="p-8 md:p-12 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-black font-medium text-lg md:text-xl mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-black font-medium text-lg md:text-xl mb-2">College Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your college email"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="branch" className="block text-black font-medium text-lg md:text-xl mb-2">Branch</label>
                                <div className="relative">
                                    <select
                                        id="branch"
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 appearance-none transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.branch ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'} ${!formData.branch ? 'text-gray-400' : 'text-black'}`}
                                        aria-describedby={errors.branch ? "branch-error" : undefined}
                                    >
                                        <option value="" disabled hidden>Select Your Branch</option>
                                        <option value="COMP-A">Computer Engineering - A</option>
                                        <option value="COMP-B">Computer Engineering - B</option>
                                        <option value="IT-A">Information Technology - A</option>
                                        <option value="IT-B">Information Technology - B</option>
                                        <option value="ENTC-A">Electronics & Telecom - A</option>
                                        <option value="ENTC-B">Electronics & Telecom - B</option>
                                        <option value="ARE">Automobile Engineering</option>
                                        <option value="MECH">Mechanical Engineering</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.branch && <p id="branch-error" className="text-red-500 text-sm mt-1">{errors.branch}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="reg" className="block text-black font-medium text-lg md:text-xl mb-2">Registration Number</label>
                                <input
                                    type="text"
                                    id="reg"
                                    name="reg"
                                    value={formData.reg}
                                    onChange={handleInputChange}
                                    placeholder="Enter registration number"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.reg ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                    aria-describedby={errors.reg ? "reg-error" : undefined}
                                />
                                {errors.reg && <p id="reg-error" className="text-red-500 text-sm mt-1">{errors.reg}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-black font-medium text-lg md:text-xl mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter 10-digit phone number"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                />
                                {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="priority" className="block text-black font-medium text-lg md:text-xl mb-2">Priority (1-5)</label>
                                <input
                                    type="number"
                                    id="priority"
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                    placeholder="Rate GDSC priority (1-5)"
                                    min="1"
                                    max="5"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.priority ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                    aria-describedby={errors.priority ? "priority-error" : undefined}
                                />
                                {errors.priority && <p id="priority-error" className="text-red-500 text-sm mt-1">{errors.priority}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="reason" className="block text-black font-medium text-lg md:text-xl mb-2">Why do you want to join GDSC?</label>
                            <textarea
                                id="reason"
                                name="reason"
                                value={formData.reason}
                                onChange={handleInputChange}
                                placeholder="Tell us your motivation to join Google Developer Student Clubs..."
                                rows={4}
                                className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none ${errors.reason ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                    }`}
                                aria-describedby={errors.reason ? "reason-error" : undefined}
                            />
                            <div className="flex justify-between items-center">
                                {errors.reason && <p id="reason-error" className="text-red-500 text-sm">{errors.reason}</p>}
                                <p className="text-gray-400 text-sm ml-auto">{formData.reason.length}/500</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="domain" className="block text-black font-medium text-lg md:text-xl mb-2">Your Domain</label>
                                <div className="relative">
                                    <select
                                        id="domain"
                                        name="domain"
                                        value={formData.domain}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 appearance-none transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.domain ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'} ${!formData.domain ? 'text-gray-400' : 'text-black'}`}
                                        aria-describedby={errors.domain ? "domain-error" : undefined}
                                    >
                                        <option value="" disabled hidden>Select Your Domain</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="AI/ML">AI/ML</option>
                                        <option value="Design">Design</option>
                                        <option value="Blockchain">Blockchain</option>
                                        <option value="Cloud">Cloud</option>
                                        <option value="App Dev">App Dev</option>
                                        <option value="Flutter">Flutter</option>
                                        <option value="Outreach">Outreach</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.domain && <p id="domain-error" className="text-red-500 text-sm mt-1">{errors.domain}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="bestProject" className="block text-black font-medium text-lg md:text-xl mb-2">Best Project (GitHub Link)</label>
                                <input
                                    type="url"
                                    id="bestProject"
                                    name="bestProject"
                                    value={formData.bestProject}
                                    onChange={handleInputChange}
                                    placeholder="https://github.com/username/project"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-black placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.bestProject ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                    aria-describedby={errors.bestProject ? "project-error" : undefined}
                                />
                                {errors.bestProject && <p id="project-error" className="text-red-500 text-sm mt-1">{errors.bestProject}</p>}
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 border-2 border-gray-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl'
                                    }`}
                                aria-busy={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-3">
                                        <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                                        <span>Submitting...</span>
                                    </div>
                                ) : (
                                    'Submit Form'
                                )}
                            </button>
                        </div>

                        <footer className="text-center pt-4">
                            <p className="text-gray-500 text-sm">
                                By submitting this form, you agree to join our amazing community of developers!
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Form