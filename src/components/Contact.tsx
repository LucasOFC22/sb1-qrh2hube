import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        form.current!,
        'your_public_key' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso!'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Element name="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para todas as suas necessidades de transporte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`mt-1 block w-full rounded-md shadow-sm 
                           ${errors.name ? 'border-red-500' : 'border-gray-300'} 
                           focus:border-blue-500 focus:ring-blue-500 h-12`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`mt-1 block w-full rounded-md shadow-sm 
                           ${errors.email ? 'border-red-500' : 'border-gray-300'} 
                           focus:border-blue-500 focus:ring-blue-500 h-12`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                           focus:border-blue-500 focus:ring-blue-500 h-12"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`mt-1 block w-full rounded-md shadow-sm 
                           ${errors.message ? 'border-red-500' : 'border-gray-300'} 
                           focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-4 py-3 rounded-md 
                         hover:bg-blue-700 flex items-center justify-center space-x-2
                         transition-colors duration-200
                         ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>

              {submitStatus.type && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Telefone</h3>
                  <p className="text-gray-600">(75) 3614-4323 / 3616-6155</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">E-mail</h3>
                  <p className="text-gray-600">contato@fptranscargas.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Comendador Gomes, 265<br />
                    Tomba, Feira de Santana - BA<br />
                    CEP: 44091-238
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}