// ==================== MOBILE NAVIGATION ====================
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu');

    // Create hamburger button
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Insert hamburger before menu
    nav.querySelector('.centre').insertBefore(hamburger, menu);

    // Toggle menu on click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('mobile-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            hamburger.classList.remove('active');
            menu.classList.remove('mobile-active');
        }
    });
};

// ==================== SMOOTH SCROLLING ====================
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// ==================== PRAYER TIMES API ====================
const updatePrayerTimes = async () => {
    try {
        // Using Aladhan API for Luleå, Sweden
        const city = 'Luleå';
        const country = 'Sweden';
        const method = 2; // ISNA method

        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`
        );

        const data = await response.json();

        if (data.code === 200) {
            const timings = data.data.timings;

            // Update prayer times in the DOM
            const prayerElements = document.querySelectorAll('.facebook-feeds .left-side .lower .right p');

            if (prayerElements.length >= 6) {
                prayerElements[0].textContent = formatTime(timings.Fajr);
                prayerElements[1].textContent = formatTime(timings.Dhuhr);
                prayerElements[2].textContent = formatTime(timings.Asr);
                prayerElements[3].textContent = formatTime(timings.Maghrib);
                prayerElements[4].textContent = formatTime(timings.Isha);

                // Jummah is typically at Dhuhr time on Friday
                const jummahTime = new Date(`2000-01-01 ${timings.Dhuhr}`);
                jummahTime.setMinutes(jummahTime.getMinutes() - 30); // 30 mins before Dhuhr
                prayerElements[5].textContent = formatTime(jummahTime.toTimeString().slice(0, 5));
            }

            console.log('✅ Prayer times updated successfully');
        }
    } catch (error) {
        console.error('❌ Error fetching prayer times:', error);
        // Keep default times if API fails
    }
};

// Format time from 24h to 12h format
const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
};

// ==================== DAILY QURANIC VERSE ====================
const quranVerses = [
    {
        arabic: "وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّكَ لَن تَخْرِقَ الْأَرْضَ وَلَن تَبْلُغَ الْجِبَالَ طُولًا",
        english: "And do not walk on the earth arrogantly. Surely you can neither crack the earth nor stretch to the height of the mountains.",
        reference: "Surah Al-Isra, Verse 37"
    },
    {
        arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
        english: "And say: My Lord, increase me in knowledge.",
        reference: "Surah Ta-Ha, Verse 114"
    },
    {
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        english: "Indeed, with hardship comes ease.",
        reference: "Surah Ash-Sharh, Verse 6"
    },
    {
        arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
        english: "And whoever fears Allah - He will make for him a way out.",
        reference: "Surah At-Talaq, Verse 2"
    },
    {
        arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
        english: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        reference: "Surah Al-Baqarah, Verse 152"
    }
];

const updateDailyVerse = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const verseIndex = dayOfYear % quranVerses.length;
    const verse = quranVerses[verseIndex];

    const verseSection = document.querySelector('.quick-verse');
    if (verseSection) {
        const arabicText = verseSection.querySelector('.middle p');
        const englishText = verseSection.querySelector('.lower p');
        const reference = verseSection.querySelector('.upper p:nth-child(3)');

        if (arabicText) arabicText.textContent = verse.arabic;
        if (englishText) englishText.textContent = verse.english;
        if (reference) reference.textContent = verse.reference;
    }
};

// ==================== HADITH OF THE DAY ====================
const hadiths = [
    {
        text: "A man came to the Prophet and asked, \"O Allah's Apostle! Which charity is the most superior in reward?\" He replied, \"The charity which you practice while you are healthy, niggardly and afraid of poverty and wish to become wealthy. Do not delay it to the time of approaching death and then say, 'Give so much to such and such, and so much to such and such.' And it has already belonged to such and such (as it is too late).\"",
        source: "Sahih Bukhari"
    },
    {
        text: "The Prophet (ﷺ) said, \"The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.\"",
        source: "Sahih Bukhari"
    },
    {
        text: "The Messenger of Allah (ﷺ) said, \"When a man dies, his deeds come to an end except for three things: Sadaqah Jariyah (continuous charity), knowledge which is beneficial, or a virtuous descendant who prays for him.\"",
        source: "Sahih Muslim"
    },
    {
        text: "The Prophet (ﷺ) said, \"Whoever believes in Allah and the Last Day should speak good or remain silent. And whoever believes in Allah and the Last Day should honor his neighbor. And whoever believes in Allah and the Last Day should honor his guest.\"",
        source: "Sahih Bukhari"
    },
    {
        text: "The Messenger of Allah (ﷺ) said, \"The best of you are those who are best to their families, and I am the best among you to my family.\"",
        source: "Jami' at-Tirmidhi"
    }
];

const updateDailyHadith = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const hadithIndex = dayOfYear % hadiths.length;
    const hadith = hadiths[hadithIndex];

    const hadithSection = document.querySelector('.hadith');
    if (hadithSection) {
        const hadithText = hadithSection.querySelector('.lower p:first-child');
        const hadithSource = hadithSection.querySelector('.lower p:last-child');

        if (hadithText) hadithText.textContent = hadith.text;
        if (hadithSource) hadithSource.textContent = hadith.source;
    }
};

// ==================== GALLERY LIGHTBOX ====================
const initGalleryLightbox = () => {
    const gallery = document.querySelector('.gallery .image');
    if (!gallery) return;

    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" src="" alt="">
        <div class="lightbox-caption"></div>
        <button class="lightbox-prev">&#10094;</button>
        <button class="lightbox-next">&#10095;</button>
    `;
    document.body.appendChild(lightbox);

    const images = gallery.querySelectorAll('img');
    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;

    const showImage = (index) => {
        currentIndex = index;
        lightboxImg.src = images[index].src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const hideImage = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Add click event to all gallery images
    images.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
        img.style.cursor = 'pointer';
    });

    // Close lightbox
    closeBtn.addEventListener('click', hideImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hideImage();
    });

    // Navigation
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') hideImage();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
};

// ==================== SCROLL ANIMATIONS ====================
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.facebook-feeds, .our-mission, .quick-verse, .hadith, .gallery, .location');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
};

// ==================== BACK TO TOP BUTTON ====================
const initBackToTop = () => {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// ==================== LOADING ANIMATION ====================
const initLoadingAnimation = () => {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
};

// ==================== DONATE BUTTON FUNCTIONALITY ====================
const initDonateButton = () => {
    const donateButtons = document.querySelectorAll('.btn p, .support-btn');

    donateButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showDonationModal();
        });
    });

    // Also targeted links that say "Support"
    document.querySelectorAll('a').forEach(link => {
        if (link.textContent.trim().toLowerCase() === 'support') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showDonationModal();
            });
        }
    });
};

const showDonationModal = () => {
    // Check if modal already exists
    if (document.querySelector('.donation-modal')) return;

    const modal = document.createElement('div');
    modal.className = 'donation-modal';
    modal.innerHTML = `
        <div class="donation-content">
            <span class="donation-close">&times;</span>
            <div class="modal-header">
                <i class="fas fa-heart"></i>
                <h2>Support Our Masjid Project</h2>
            </div>
            <p>Help us build the Norrbottens Islamiska Center</p>
            <div class="donation-info">
                <div class="info-item">
                    <i class="fas fa-university"></i>
                    <h3>Bank Transfer</h3>
                    <p><strong>Account:</strong> NIC Donations</p>
                    <p><strong>IBAN:</strong> SE00 0000 0000 0000 0000</p>
                    <button class="copy-btn" data-copy="SE00 0000 0000 0000 0000">Copy IBAN</button>
                </div>
                <div class="info-item">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Swish</h3>
                    <p><strong>Number:</strong> 123 456 7890</p>
                    <button class="copy-btn" data-copy="1234567890">Copy Swish</button>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope-open-text"></i>
                    <h3>General Queries</h3>
                    <p>Email: contact@thenic.se</p>
                    <p>Phone: +46 XXX XXX XXX</p>
                </div>
            </div>
            <p class="jazakallah">جزاك الله خيرا - JazakAllah Khair</p>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    setTimeout(() => modal.classList.add('show'), 10);

    const closeBtn = modal.querySelector('.donation-close');
    closeBtn.addEventListener('click', () => closeDonationModal(modal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeDonationModal(modal);
    });

    // Add copy functionality to modal buttons
    modal.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(() => {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
    });
};

const closeDonationModal = (modal) => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
};

// ==================== SOCIAL MEDIA INTERACTIONS ====================
const initSocialMedia = () => {
    // We now use actual <a> tags in HTML, so we just handle hover scaling here
    const socialIcons = document.querySelectorAll('.nav .right img, .footer .right .image img');

    socialIcons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease';

        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
};

// ==================== FACEBOOK FEED CARDS ====================
const initFacebookCards = () => {
    const fbCards = document.querySelectorAll('.box1, .box2');

    fbCards.forEach(card => {
        card.addEventListener('click', () => {
            window.open('https://www.facebook.com/NorrbottensIslamiskaCentrum', '_blank');
        });

        card.style.cursor = 'pointer';
    });
};

// ==================== NAVIGATION ACTIVE STATE ====================
const updateActiveNavigation = () => {
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'Home.html';
    const navLinks = document.querySelectorAll('.menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes(currentPage) || (currentPage === 'Home.html' && href === 'Home.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// ==================== COPY TO CLIPBOARD ====================
const initCopyToClipboard = () => {
    // Use standard querySelectorAll and filter manually
    const ps = document.querySelectorAll('p');
    ps.forEach(p => {
        if (p.textContent.toLowerCase().includes('email:')) {
            const emailMatch = p.textContent.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
            if (emailMatch) {
                p.style.cursor = 'pointer';
                p.title = 'Click to copy email';
                p.addEventListener('click', () => {
                    navigator.clipboard.writeText(emailMatch[0]).then(() => {
                        showToast('Email copied to clipboard!');
                    });
                });
            }
        }
    });
};

// ==================== TOAST NOTIFICATIONS ====================
const showToast = (message, duration = 3000) => {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
};

// ==================== PRAYER TIME COUNTDOWN ====================
const initPrayerCountdown = () => {
    const updateCountdown = () => {
        const now = new Date();
        const prayerTimes = document.querySelectorAll('.facebook-feeds .left-side .lower .right p');

        if (prayerTimes.length > 0) {
            // Find next prayer
            const prayers = Array.from(prayerTimes).slice(0, 5).map(p => {
                const timeStr = p.textContent.trim();
                return parseTime(timeStr);
            }).filter(t => t > now);

            if (prayers.length > 0) {
                const nextPrayer = prayers[0];
                const diff = nextPrayer - now;
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                // You can display this countdown somewhere
                console.log(`Next prayer in: ${hours}h ${minutes}m`);
            }
        }
    };

    setInterval(updateCountdown, 60000); // Update every minute
};

const parseTime = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return date;
};

// ==================== KEYBOARD SHORTCUTS ====================
const initKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K: Focus search (if exists)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Focus search if it exists
        }

        // Ctrl/Cmd + H: Go to home
        if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
            e.preventDefault();
            window.location.href = '/home/Home.html';
        }

        // Escape: Close any open modals
        if (e.key === 'Escape') {
            const modal = document.querySelector('.donation-modal.show');
            if (modal) closeDonationModal(modal);
        }
    });
};

// ==================== RIPPLE EFFECT ====================
const initRippleEffect = () => {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.btn, .support-btn, button, .copy-btn');
        if (!target) return;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        target.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
};

// ==================== IMAGE HOVER EFFECTS ====================
const initImageHover = () => {
    const images = document.querySelectorAll('.content1 img, .content2 img, .content3 img, .pic1 img, .pic2 img, .pic3 img, .pic4 img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.02) translateY(-5px)';
            img.style.transition = 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) translateY(0)';
        });
    });
};

// ==================== INITIALIZE ALL FEATURES ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing NIC Website...');

    // Initialize all features
    createMobileMenu();
    initSmoothScroll();
    updatePrayerTimes();
    updateDailyVerse();
    updateDailyHadith();
    initGalleryLightbox();
    initScrollAnimations();
    initBackToTop();
    initLoadingAnimation();
    initDonateButton();
    initSocialMedia();
    initFacebookCards();
    updateActiveNavigation();
    initCopyToClipboard();
    initPrayerCountdown();
    initKeyboardShortcuts();
    initTeamInteractivity();
    initRippleEffect();
    initImageHover();

    // Update prayer times every hour
    setInterval(updatePrayerTimes, 3600000);

    console.log('✅ NIC Website initialized successfully!');
});

// ==================== UTILITY FUNCTIONS ====================
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
