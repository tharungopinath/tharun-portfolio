export default function ResumeModal({ open, onClose }) {
  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">// resume.pdf</span>
          <div className="modal-actions">
            <a className="modal-dl" href="/resume.pdf" download>
              ↓ download
            </a>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>
        </div>
        <iframe src="/resume.pdf" title="Resume" />
      </div>
    </div>
  );
}
