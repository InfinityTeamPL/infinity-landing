const EMAIL = 'contact@infinityteam.io';

function showCopiedToast(email: string) {
  document.getElementById('email-copied-toast')?.remove();
  const toast = document.createElement('div');
  toast.id = 'email-copied-toast';
  toast.setAttribute('role', 'status');
  toast.textContent = `Adres email skopiowany: ${email}`;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '28px',
    left: '50%',
    transform: 'translateX(-50%) translateY(8px)',
    zIndex: '9999',
    padding: '10px 20px',
    borderRadius: '9999px',
    background: 'var(--surface-1)',
    border: '1px solid var(--border-soft)',
    color: 'var(--fg)',
    fontSize: '13px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
    backdropFilter: 'blur(8px)',
    opacity: '0',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    pointerEvents: 'none',
    maxWidth: 'calc(100vw - 32px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as Partial<CSSStyleDeclaration>);
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(8px)';
    setTimeout(() => toast.remove(), 350);
  }, 2600);
}

// Opens the mail client; if the tab stays visible (no client picked it up),
// copies the address to the clipboard and shows a toast instead.
export function handleMailto(e: { preventDefault: () => void }) {
  e.preventDefault();
  window.open(`mailto:${EMAIL}`, '_self');
  setTimeout(() => {
    if (!document.hidden) {
      navigator.clipboard
        .writeText(EMAIL)
        .then(() => showCopiedToast(EMAIL))
        .catch(() => {});
    }
  }, 500);
}
