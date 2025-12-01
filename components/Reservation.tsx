import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Reservation: React.FC<ReservationProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
        onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {!success ? (
            <>
                <div className="bg-kuwait-dark p-6 flex justify-between items-center text-white">
                    <h2 className="font-serif text-2xl">{t('reservationTitle')}</h2>
                    <button onClick={onClose} className="hover:text-kuwait-gold"><X /></button>
                </div>
                
                <div className="p-8">
                    <p className="text-gray-500 mb-6">{t('reservationDesc')}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">{t('date')}</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                                    <input required type="date" className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-kuwait-gold" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">{t('time')}</label>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                                    <input required type="time" className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-kuwait-gold" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-500 mb-1">{t('guests')}</label>
                            <div className="relative">
                                <Users className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                                <select className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-kuwait-gold">
                                    {[1,2,3,4,5,6,7,8, "9+"].map(n => <option key={n} value={n}>{n} People</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                             <input required placeholder={t('fullName')} className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-kuwait-gold" />
                             <input required type="tel" placeholder={t('phone')} className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-kuwait-gold" />
                             <textarea placeholder={t('specialRequests')} rows={2} className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-kuwait-gold" />
                        </div>

                        <button type="submit" className="w-full py-3 bg-kuwait-gold text-kuwait-dark font-bold rounded-lg hover:bg-opacity-90 transition shadow-md mt-2">
                            {t('confirmBooking')}
                        </button>
                    </form>
                </div>
            </>
        ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                    <Check size={40} />
                </div>
                <h3 className="text-2xl font-serif text-kuwait-dark">{t('bookingSuccess')}</h3>
                <p className="text-gray-500">{t('bookingMessage')}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;