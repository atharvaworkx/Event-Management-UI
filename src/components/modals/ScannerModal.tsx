import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  QrCode, 
  CheckCircle2, 
  AlertCircle, 
  Camera, 
  Zap, 
  ShieldCheck, 
  Clock, 
  User, 
  Building2 
} from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ScannerModal: React.FC = () => {
  const { scannerModalOpen, setScannerModalOpen, processCheckIn, checkInLogs } = useApp();
  const [passInput, setPassInput] = useState('');
  const [lastResult, setLastResult] = useState<{
    success: boolean;
    message: string;
    record?: any;
  } | null>(null);

  if (!scannerModalOpen) return null;

  const handleScan = (codeToScan?: string) => {
    const code = codeToScan || passInput;
    if (!code.trim()) return;

    const res = processCheckIn(code);
    setLastResult(res);
    setPassInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="w-full max-w-2xl bg-surface border border-surface-border rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-surface-border bg-surface-subtle flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400 border border-gold-400/30">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base text-paper uppercase tracking-wider">
                Event Pass Check-in Scanner
              </h2>
              <span className="text-xs text-gray-400 font-mono">
                Alandi Campus Central Gate • Verified Turnstile System
              </span>
            </div>
          </div>
          <button 
            onClick={() => setScannerModalOpen(false)}
            className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-surface-hover"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Simulated Optical Viewport */}
          <div className="relative w-full h-56 bg-charcoal-950 border-2 border-dashed border-neutral-700 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center p-4 group">
            {/* Corner guides */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold-400"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold-400"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400"></div>

            {/* Oscillating Laser Beam */}
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_12px_#D4AF37] animate-pulse transition-all"></div>

            <Camera className="w-8 h-8 text-neutral-600 mb-2 group-hover:text-gold-400 transition-colors" />
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
              Camera Feed Active: Scan QR on Participant Badge
            </span>
            <span className="text-[11px] text-gray-600 mt-1">
              Supports digital screens, printed passes & wristband QR tags
            </span>
          </div>

          {/* Quick Simulation Action Buttons */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-gray-400 block">
              Simulate Instant Scanner Triggers:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleScan('KSH-26-01482')}
                className="px-3 py-1.5 rounded bg-surface-subtle hover:bg-surface-hover border border-gold-400/40 text-gold-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-gold-400" />
                Scan: Atharva Warankar (Kshitij 2026)
              </button>

              <button
                onClick={() => handleScan('INN-26-00421')}
                className="px-3 py-1.5 rounded bg-surface-subtle hover:bg-surface-hover border border-surface-border text-gray-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-gray-400" />
                Scan: Innovyuh Pass #INN-26
              </button>

              <button
                onClick={() => handleScan('UNKNOWN-PASS-99')}
                className="px-3 py-1.5 rounded bg-surface-subtle hover:bg-surface-hover border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                Test Invalid Pass
              </button>
            </div>
          </div>

          {/* Manual Input Form */}
          <div className="flex gap-2">
            <input
              type="text"
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleScan()}
              placeholder="Or manually input Pass ID (e.g. KSH-26-01482)..."
              className="flex-1 px-3.5 py-2 bg-surface-subtle border border-surface-border rounded text-sm text-paper font-mono focus:outline-none focus:border-gold-400"
            />
            <Button variant="primary" size="sm" onClick={() => handleScan()}>
              Verify Pass
            </Button>
          </div>

          {/* Verification Result Banner */}
          {lastResult && (
            <div className={`p-4 rounded-lg border transition-all animate-in fade-in duration-200 ${
              lastResult.success 
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200' 
                : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
            }`}>
              <div className="flex items-start gap-3">
                {lastResult.success ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-black tracking-widest text-base uppercase">
                      {lastResult.success ? 'ENTRY VERIFIED' : 'ACCESS DENIED'}
                    </span>
                    <Badge variant={lastResult.success ? 'green' : 'red'} size="sm">
                      {lastResult.record?.status || 'Flagged'}
                    </Badge>
                  </div>
                  <p className="text-xs font-sans opacity-90">{lastResult.message}</p>

                  {lastResult.record && (
                    <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono">
                      <div>
                        <span className="text-gray-400 text-[10px] block uppercase">Participant</span>
                        <span className="font-semibold text-white">{lastResult.record.studentName}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] block uppercase">Event</span>
                        <span className="font-semibold text-white">{lastResult.record.eventTitle}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] block uppercase">College</span>
                        <span className="text-white">{lastResult.record.college}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] block uppercase">Check-in Time</span>
                        <span className="text-gold-300 font-bold">{lastResult.record.timestamp}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Recent Scans Table */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                Recent Audit Trail ({checkInLogs.length})
              </span>
            </div>

            <div className="max-h-40 overflow-y-auto border border-surface-border rounded bg-surface-subtle divide-y divide-surface-border text-xs">
              {checkInLogs.slice(0, 5).map((log) => (
                <div key={log.id} className="p-2.5 flex items-center justify-between font-mono">
                  <div>
                    <span className="font-semibold text-paper font-sans mr-2">{log.studentName}</span>
                    <span className="text-gray-500 text-[11px]">({log.passId})</span>
                    <span className="text-[11px] text-gray-400 block">{log.eventTitle} • {log.college}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge variant={log.status === 'Verified' ? 'green' : 'red'} size="sm">
                      {log.status}
                    </Badge>
                    <span className="text-[10px] text-gray-500 block mt-0.5">{log.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

