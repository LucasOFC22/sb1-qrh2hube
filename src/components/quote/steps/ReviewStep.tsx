import React, { useState } from 'react';
import { ClipboardCheck, ArrowLeft, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FreightQuote } from '../../../types/freight';
import { formatCurrency, formatWeight, formatDimensions } from '../../../utils/formatters';

interface ReviewStepProps {
  data: FreightQuote;
  onBack: () => void;
  onComplete: () => void;
}

export function ReviewStep({ data, onBack, onComplete }: ReviewStepProps) {
  const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento
  const [error, setError] = useState(''); // Para mostrar erros de envio

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Envia os dados para o servidor PHP via POST
      const response = await fetch('./src/components/freight/SendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Envia os dados como JSON
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar a cotação');
      }

      // Se a requisição for bem-sucedida, chama onComplete
      onComplete();
    } catch (err) {
      setError('Erro ao enviar a cotação. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false); // Define loading como false após o envio
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center mb-8">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ClipboardCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Revisão da Cotação</h2>
        <p className="text-gray-600 mt-2">Revise todas as informações antes de enviar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Cargo Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Carga</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Descrição</p>
              <p className="font-medium">{data.cargo.description}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quantidade</p>
              <p className="font-medium">{data.cargo.quantity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Peso</p>
              <p className="font-medium">{formatWeight(data.cargo.weight)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Valor Declarado</p>
              <p className="font-medium">{formatCurrency(data.cargo.value)}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Dimensões</p>
              <p className="font-medium">
                {formatDimensions(data.cargo.length)} x {formatDimensions(data.cargo.width)} x {formatDimensions(data.cargo.height)}
              </p>
            </div>
          </div>
        </div>

        {/* Sender Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados do Remetente</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Nome</p>
              <p className="font-medium">{data.sender.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Documento</p>
              <p className="font-medium">{data.sender.document}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Telefone</p>
              <p className="font-medium">{data.sender.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{data.sender.email}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Endereço</p>
              <p className="font-medium">
                {data.sender.address.street}, {data.sender.address.number}
                {data.sender.address.complement && ` - ${data.sender.address.complement}`}
                <br />
                {data.sender.address.neighborhood} - {data.sender.address.city}/{data.sender.address.state}
                <br />
                CEP: {data.sender.address.zipCode}
              </p>
            </div>
          </div>
        </div>

        {/* Recipient Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados do Destinatário</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Nome</p>
              <p className="font-medium">{data.recipient.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Documento</p>
              <p className="font-medium">{data.recipient.document}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Telefone</p>
              <p className="font-medium">{data.recipient.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{data.recipient.email}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Endereço</p>
              <p className="font-medium">
                {data.recipient.address.street}, {data.recipient.address.number}
                {data.recipient.address.complement && ` - ${data.recipient.address.complement}`}
                <br />
                {data.recipient.address.neighborhood} - {data.recipient.address.city}/{data.recipient.address.state}
                <br />
                CEP: {data.recipient.address.zipCode}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Preference */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Forma de Contato</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Preferência</p>
              <p className="font-medium capitalize">{data.contactPreference}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Contato</p>
              <p className="font-medium">{data.contactValue}</p>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 
                     hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 
                     text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200"
          >
            <span>{loading ? 'Enviando...' : 'Enviar Cotação'}</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Error message */}
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </motion.div>
  );
}
