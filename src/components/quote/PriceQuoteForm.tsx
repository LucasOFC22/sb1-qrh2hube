import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  quantity: number;
  notes: string;
}

export function PriceQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    quantity: 1,
    notes: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    if (!formData.service.trim()) {
      newErrors.service = 'Produto/Serviço é obrigatório';
    }
    
    if (formData.quantity < 1) {
      newErrors.quantity = 'Quantidade deve ser maior que 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        quantity: 1,
        notes: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`form-input h-12 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`form-input h-12 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`form-input h-12 ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="(00) 00000-0000"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Produto/Serviço <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`form-input h-12 ${errors.service ? 'border-red-500' : ''}`}
              placeholder="Descreva o produto ou serviço"
            />
            {errors.service && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.service}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantidade <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
              className={`form-input h-12 ${errors.quantity ? 'border-red-500' : ''}`}
              min="1"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.quantity}
              </p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Observações
            </label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="form-input min-h-[120px]"
              placeholder="Informações adicionais sobre sua solicitação"
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-4 px-8 rounded-lg
                     text-lg font-semibold hover:bg-blue-700 
                     transform transition-all duration-300
                     flex items-center justify-center space-x-2
                     ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
          >
            <Send className="h-5 w-5" />
            <span>{isSubmitting ? 'Enviando...' : 'Solicitar Cotação'}</span>
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Cotação enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
    </form>
  );
}