export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/27761964617?text=Hi%20Marco%20Adamo%2C%20I%27d%20like%20to%20know%20more%20about%20your%20shoes."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-lg sm:block">
        Need Help? Chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.402L3.2 28.8l6.56-1.72a12.74 12.74 0 0 0 6.243 1.59h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053A12.72 12.72 0 0 0 16.003 3.2zm0 23.04h-.004a10.6 10.6 0 0 1-5.4-1.482l-.387-.23-4.02 1.054 1.073-3.92-.252-.402a10.6 10.6 0 0 1-1.626-5.66c0-5.86 4.77-10.63 10.634-10.63 2.84 0 5.508 1.107 7.516 3.116a10.56 10.56 0 0 1 3.114 7.518c0 5.86-4.77 10.63-10.63 10.63zm5.832-7.95c-.32-.16-1.89-.932-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.893-1.776-2.213-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.306.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.822.674.766.244 1.463.21 2.015.127.614-.092 1.89-.773 2.156-1.52.266-.746.266-1.386.186-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </span>
    </a>
  );
}
