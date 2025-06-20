import React, { useState } from 'react';
import { Play, Eye, TrendingUp, CheckCircle, Mail, Youtube, Zap } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    channelName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xnnvbzye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channelName: formData.channelName,
          email: formData.email,
          _subject: 'New ViewerPower Early Access Registration'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for registering! We\'ll notify you when ViewerPower launches.');
        setFormData({ channelName: '', email: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('early-access-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold">ViewerPower</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop Grinding. Start Growing.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get the 4,000 YouTube watch hours you need with real, verified UK viewers. 
            Reach your monetization goals faster with ViewerPower.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Register for Early Access
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Straightforward Path to Monetization
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ViewerPower connects your content with real UK viewers through our simple three-step process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Play className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                You Feature Your Video
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Submit a video to ViewerPower to be featured to our community of verified UK viewers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Eye className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Community Watches
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our network of verified UK viewers watches your content to earn rewards through ViewerPower.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                You Gain Watch Hours
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your channel gains real watch time, pushing you towards your monetization goals. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Creators, With Integrity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ViewerPower is designed to help YouTube creators reach monetization while maintaining the highest standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Real UK Viewers
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ViewerPower's entire viewing community is based in the UK, providing you with valuable audience metrics and genuine engagement.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  TOS Compliant
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ViewerPower operates within YouTube's Terms of Service. No bots or fake engagement, ever. Just real viewers, real engagement.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Simple Analytics
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Track the watch hours ViewerPower delivers to your channel through a clean and simple dashboard with detailed insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Form Section */}
      <section id="early-access-form" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Be the First to Know
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Register for exclusive early access and we'll notify you the moment ViewerPower launches.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="channelName" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  YouTube Channel Name
                </label>
                <div className="relative">
                  <Youtube className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="channelName"
                    name="channelName"
                    value={formData.channelName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your channel name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none"
            >
              {isSubmitting ? 'Submitting...' : 'Notify Me'}
            </button>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitMessage}
              </div>
            )}
          </form>

          <p className="text-sm text-gray-500 mt-6">
            Join thousands of creators already waiting for ViewerPower to launch
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-blue-600 p-1.5 rounded">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">ViewerPower</span>
          </div>
          <p className="text-sm">
            © 2025 ViewerPower. All rights reserved. Built for creators in the United Kingdom.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;