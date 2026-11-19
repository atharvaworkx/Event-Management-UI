import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, QrCode, Download, Share2, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const DigitalPassModal: React.FC = () => {
  const { activePassModal, closePassModal } = useApp();

  if (!activePassModal) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert(`Downloading verified pass: ${activePassModal.passId}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="w-full max-w-lg relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button top-right */}
        <button
          onClick={closePassModal}
          className="absolute -top-10 right-0 p-1.5 rounded-full bg-surface-subtle border border-surface-border text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The Digital Pass Container */}
        <div className="bg-[#0C0E14] border-2 border-gold-400/50 rounded-xl overflow-hidden shadow-2xl relative">
          {/* Top Foil Band */}
          <div className="h-2 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>

          {/* Pass Header */}
          <div className="p-6 pb-4 border-b border-surface-border flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif tracking-widest text-[11px] text-gold-400 font-bold uppercase">
                  EVENT MANAGEMENT SYSTEM
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">OFFICIAL ACCESS PASS</span>
              </div>
              <h2 className="font-serif text-2xl font-black text-paper uppercase tracking-wider">
                {activePassModal.eventTitle}
              </h2>
              <p className="text-xs text-gold-300 font-mono mt-0.5">
                {activePassModal.collegeName}
              </p>
            </div>
            
            <Badge variant="gold" size="sm">
              {activePassModal.status === 'Checked In' ? 'Checked In' : 'VIP ENTRY'}
            </Badge>
          </div>

          {/* Pass Body */}
          <div className="p-6 space-y-6">
            {/* Participant Name & Category */}
            <div className="flex items-end justify-between border-b border-surface-border pb-4">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                  OFFICIAL PARTICIPANT
                </span>
                <h3 className="font-sans text-xl font-extrabold text-paper tracking-wide uppercase">
                  {activePassModal.participant.name}
                </h3>
                <span className="text-xs text-gray-400 font-mono">
                  {activePassModal.participant.course} • {activePassModal.participant.college}
                </span>
              </div>
              
              <div className="text-right">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                  FORMAT
                </span>
                <span className="text-sm font-bold text-gold-400 uppercase">
                  {activePassModal.participationType === 'Team' ? activePassModal.teamName || 'Team Pass' : 'Individual'}
                </span>
              </div>
            </div>

            {/* Grid Information: Date, Venue, Pass ID */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-[10px] text-gray-500 uppercase block mb-0.5">EVENT DATES</span>
                <span className="text-paper font-semibold">{activePassModal.eventDate}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase block mb-0.5">REGISTRATION ID</span>
                <span className="text-gold-400 font-bold text-sm tracking-wide">{activePassModal.passId}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] text-gray-500 uppercase block mb-0.5">CAMPUS VENUE</span>
                <span className="text-gray-300 leading-snug block">{activePassModal.eventVenue}</span>
              </div>
            </div>

            {/* QR Code & Verification Block */}
            <div className="p-4 bg-surface-subtle border border-surface-border rounded-lg flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>CRYPTOGRAPHICALLY AUDITED</span>
                </div>
                <p className="text-[11px] text-gray-400 font-sans max-w-[220px]">
                  Present this authenticated QR pass at security checkpost or lab entry desks.
                </p>
                <div className="text-[9px] font-mono text-gray-500 pt-1">
                  SIG: {activePassModal.qrCodeSignature.slice(0, 24)}...
                </div>
              </div>

              {/* QR Box */}
              <div className="p-2 bg-white rounded border border-gold-400/40 shrink-0 shadow-lg">
                <QrCode className="w-20 h-20 text-black stroke-[2.5]" />
              </div>
            </div>

            {/* Realistic Barcode graphic simulation */}
            <div className="pt-2">
              <div className="h-8 w-full flex items-center justify-between overflow-hidden opacity-60">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-paper h-full"
                    style={{
                      width: i % 4 === 0 ? '4px' : i % 3 === 0 ? '1px' : i % 2 === 0 ? '2px' : '3px',
                      opacity: i % 5 === 0 ? 0.3 : 1
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[9px] font-mono text-gray-500 mt-1">
                <span>AUTH://EMS.PUNE.VALIDATED</span>
                <span>{activePassModal.passId}</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-4 bg-surface-subtle border-t border-surface-border flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-gray-400">
              Valid for entire event duration
            </span>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" icon={<Printer className="w-3.5 h-3.5" />} onClick={handlePrint}>
                Print
              </Button>
              <Button variant="primary" size="sm" icon={<Download className="w-3.5 h-3.5" />} onClick={handleDownload}>
                Save Pass
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

