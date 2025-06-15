// Galería en Carrusel
const carouselInner = document.getElementById('carouselInner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.getElementById('indicators');

const carouselItems = [
    {
        img: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Mercedes-Benz Clase S',
        description: 'Elegancia y confort en nuestro vehículo insignia'
    },
    {
        img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'BMW Serie 7',
        description: 'Tecnología y lujo para su máximo confort'
    },
    {
        img: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Audi A8',
        description: 'Diseño sofisticado y prestaciones excepcionales'
    },
    {
        img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Range Rover Autobiography',
        description: 'Lujo y capacidad todo terreno combinados'
    }
];

let currentIndex = 0;

// Crear elementos del carrusel
carouselItems.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    
    const caption = document.createElement('div');
    caption.className = 'carousel-caption';
    caption.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
    
    carouselItem.appendChild(img);
    carouselItem.appendChild(caption);
    carouselInner.appendChild(carouselItem);
    
    // Crear indicadores
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
    indicators.appendChild(indicator);
});

// Navegación del carrusel
function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Actualizar indicadores
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Testimonios mejorados
const testimonialsTrack = document.getElementById('testimonialsTrack');
const testimonialNav = document.getElementById('testimonialNav');

const testimonials = [
    {
        name: "Carlos Martínez",
        role: "Ejecutivo de Ventas",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: "★★★★★",
        comment: "Royalty Taxi ha transformado mis traslados de trabajo. El servicio VIP vale cada peso extra, especialmente para reuniones importantes. La puntualidad y el estado de los vehículos es impecable."
    },
    {
        name: "Ana Rodríguez",
        role: "Directora de Hotel",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: "★★★★★",
        comment: "Como cliente frecuente, puedo decir que su puntualidad y profesionalismo son incomparables. Mis huéspedes VIP siempre quedan impresionados con el servicio y la discreción de los choferes."
    },
    {
        name: "Javier López",
        role: "Empresario",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: "★★★★☆",
        comment: "El upgrade a servicio VIP fue la mejor decisión. Los autos son impecables, siempre limpios y con amenities de primera. Los choferes conocen perfectamente la ciudad y las mejores rutas."
    },
    {
        name: "María González",
        role: "Médica",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: "★★★★★",
        comment: "Cuando necesito llegar fresca y concentrada a una cirugía importante, confío en Royalty Taxi. Su servicio médico con vehículos equipados es excepcional y me da la tranquilidad que necesito."
    }
];

let currentTestimonial = 0;
let isAnimating = false;

// Crear testimonios
testimonials.forEach((testimonial, index) => {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    
    testimonialElement.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
            <div>
                <div class="testimonial-author">${testimonial.name}</div>
                <div class="testimonial-role">${testimonial.role}</div>
            </div>
        </div>
        <div class="testimonial-content">
            <div class="testimonial-rating">${testimonial.rating}</div>
            <p>"${testimonial.comment}"</p>
        </div>
    `;
    
    testimonialsTrack.appendChild(testimonialElement);
    
    // Crear puntos de navegación
    const dot = document.createElement('div');
    dot.className = 'testimonial-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        if (!isAnimating) goToTestimonial(index);
    });
    testimonialNav.appendChild(dot);
});

function updateTestimonials() {
    isAnimating = true;
    testimonialsTrack.style.transition = 'transform 0.5s ease-in-out';
    testimonialsTrack.style.transform = `translateY(-${currentTestimonial * 100}%)`;
    
    // Actualizar puntos de navegación
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
    
    // Resetear la animación después de que termine
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonials();
}

function nextTestimonial() {
    if (isAnimating) return;
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonials();
}

// Cambio automático cada 5 segundos
setInterval(nextTestimonial, 5000);

// Modal VIP
const btnRequest = document.getElementById('btnRequest');
const vipModal = document.getElementById('vipModal');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnWhatsApp = document.getElementById('btnWhatsApp');
const taxiForm = document.getElementById('taxiForm');

// Mostrar modal al hacer clic en solicitar taxi
btnRequest.addEventListener('click', function() {
    if (taxiForm.checkValidity()) {
        vipModal.style.display = 'block';
    } else {
        alert('Por favor complete todos los campos requeridos');
        taxiForm.reportValidity();
    }
});

// Botón de WhatsApp directo
btnWhatsApp.addEventListener('click', function() {
    if (taxiForm.checkValidity()) {
        sendWhatsAppMessage(false);
    } else {
        alert('Por favor complete todos los campos requeridos');
        taxiForm.reportValidity();
    }
});

// Cerrar modal al hacer clic en No
btnNo.addEventListener('click', function() {
    vipModal.style.display = 'none';
    sendWhatsAppMessage(false);
});

// Enviar solicitud VIP al hacer clic en Sí
btnYes.addEventListener('click', function() {
    vipModal.style.display = 'none';
    sendWhatsAppMessage(true);
});

// Función para enviar mensaje por WhatsApp
function sendWhatsAppMessage(isVIP) {
    // Obtener datos del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const datetime = document.getElementById('datetime').value;
    const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
    const passengers = document.getElementById('passengers').value;
    const notes = document.getElementById('notes').value;
    
    // Formatear fecha y hora
    const formattedDate = new Date(datetime).toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Crear mensaje para WhatsApp
    let whatsappMessage = `¡SOLICITUD TAXI ${isVIP ? 'VIP' : ''}!%0A%0A` +
                        `*Nombre:* ${name}%0A` +
                        `*Teléfono:* ${phone}%0A` +
                        `*Recogida:* ${pickup}%0A` +
                        `*Destino:* ${destination}%0A` +
                        `*Fecha/Hora:* ${formattedDate}%0A` +
                        `*Servicio:* ${service}${isVIP ? ' (VIP +200 CUP)' : ''}%0A` +
                        `*Pasajeros:* ${passengers}%0A` +
                        `*Notas:* ${notes || 'Ninguna'}`;
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/52666216?text=${whatsappMessage}`, '_blank');
    
    // Mostrar confirmación
    alert(`¡Solicitud ${isVIP ? 'VIP ' : ''}recibida! Serás redirigido a WhatsApp para confirmar.`);
    
    // Limpiar formulario
    taxiForm.reset();
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === vipModal) {
        vipModal.style.display = 'none';
    }
});

// Inicializar testimonios
updateTestimonials();