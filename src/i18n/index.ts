import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        discover: 'Discover',
        library: 'Library',
        shortcuts: 'Shortcuts',
        newThread: 'New thread',
        pricing: 'Pricing'
      },
      search: {
        placeholder: 'Ask anything...',
        followUp: 'Ask a follow up...',
        pro: 'Pro'
      },
      main: {
        sources: 'sources',
        related: 'Related',
        followUp: 'Ask follow up'
      },
      settings: {
        title: 'Settings',
        subtitle: 'Manage your account settings and preferences',
        account: 'Account & Profile',
        accountDesc: 'Manage your personal information and profile settings',
        notifications: 'Notifications',
        notificationsDesc: 'Control how you receive notifications',
        privacy: 'Privacy & Security',
        privacyDesc: 'Manage your privacy settings and security preferences',
        dataExport: 'Data Export',
        dataExportDesc: 'Download your data and search history',
        appearance: 'Appearance',
        appearanceDesc: 'Customize the look and feel of the interface',
        language: 'Language & Region',
        languageDesc: 'Change your language and regional preferences',
        help: 'Help & Support',
        helpDesc: 'Get help and contact support'
      },
      account: {
        title: 'Account Settings',
        subtitle: 'Manage your account information and preferences',
        profile: 'Profile Information',
        edit: 'Edit',
        fullName: 'Full Name',
        username: 'Username',
        email: 'Email Address',
        phone: 'Phone Number'
      },
      privacy: {
        title: 'Privacy & Security',
        subtitle: 'Manage your privacy settings and security preferences',
        securitySettings: 'Security Settings',
        twoFactor: 'Two-Factor Authentication',
        twoFactorDesc: 'Add an extra layer of security to your account',
        enabled: 'Enabled',
        disabled: 'Disabled',
        enable: 'Enable',
        disable: 'Disable'
      },
      appearance: {
        title: 'Appearance',
        subtitle: 'Customize how the interface looks and feels',
        theme: 'Theme',
        light: 'Light',
        lightDesc: 'Clean and bright interface',
        dark: 'Dark',
        darkDesc: 'Easy on the eyes in low light',
        system: 'System',
        systemDesc: 'Matches your device settings',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
        extraLarge: 'Extra Large',
        compact: 'Compact',
        compactDesc: 'More content in less space',
        comfortable: 'Comfortable',
        comfortableDesc: 'Balanced spacing and readability',
        spacious: 'Spacious',
        spaciousDesc: 'Extra breathing room'
      },
      language: {
        title: 'Language',
        subtitle: 'Choose your preferred language',
        currentSettings: 'Current Settings',
        resetOptions: 'Reset Options',
        resetDefaults: 'Reset to Defaults'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        discover: 'Découvrir',
        library: 'Bibliothèque',
        shortcuts: 'Raccourcis',
        newThread: 'Nouveau fil'
      },
      search: {
        placeholder: 'Demandez n\'importe quoi...',
        followUp: 'Posez une question de suivi...',
        pro: 'Pro'
      },
      main: {
        sources: 'sources',
        related: 'Connexe',
        followUp: 'Poser une question de suivi'
      },
      settings: {
        title: 'Paramètres',
        subtitle: 'Gérez les paramètres de votre compte et vos préférences',
        account: 'Compte et profil',
        accountDesc: 'Gérez vos informations personnelles et paramètres de profil',
        notifications: 'Notifications',
        notificationsDesc: 'Contrôlez comment vous recevez les notifications',
        privacy: 'Confidentialité et sécurité',
        privacyDesc: 'Gérez vos paramètres de confidentialité et préférences de sécurité',
        dataExport: 'Export de données',
        dataExportDesc: 'Téléchargez vos données et historique de recherche',
        appearance: 'Apparence',
        appearanceDesc: 'Personnalisez l\'apparence de l\'interface',
        language: 'Langue et région',
        languageDesc: 'Changez votre langue et préférences régionales',
        help: 'Aide et support',
        helpDesc: 'Obtenez de l\'aide et contactez le support'
      },
      account: {
        title: 'Paramètres du compte',
        subtitle: 'Gérez les informations de votre compte et vos préférences',
        profile: 'Informations du profil',
        edit: 'Modifier',
        fullName: 'Nom complet',
        username: 'Nom d\'utilisateur',
        email: 'Adresse e-mail',
        phone: 'Numéro de téléphone'
      },
      privacy: {
        title: 'Confidentialité et sécurité',
        subtitle: 'Gérez vos paramètres de confidentialité et préférences de sécurité',
        securitySettings: 'Paramètres de sécurité',
        twoFactor: 'Authentification à deux facteurs',
        twoFactorDesc: 'Ajoutez une couche de sécurité supplémentaire à votre compte',
        enabled: 'Activé',
        disabled: 'Désactivé',
        enable: 'Activer',
        disable: 'Désactiver'
      },
      appearance: {
        title: 'Apparence',
        subtitle: 'Personnalisez l\'apparence de l\'interface',
        theme: 'Thème',
        light: 'Clair',
        lightDesc: 'Interface propre et lumineuse',
        dark: 'Sombre',
        darkDesc: 'Facile pour les yeux en faible luminosité',
        system: 'Système',
        systemDesc: 'Correspond aux paramètres de votre appareil',
        small: 'Petit',
        medium: 'Moyen',
        large: 'Grand',
        extraLarge: 'Très grand',
        compact: 'Compact',
        compactDesc: 'Plus de contenu dans moins d\'espace',
        comfortable: 'Confortable',
        comfortableDesc: 'Espacement équilibré et lisibilité',
        spacious: 'Spacieux',
        spaciousDesc: 'Espace de respiration supplémentaire'
      },
      language: {
        title: 'Langue',
        subtitle: 'Choisissez votre langue préférée',
        currentSettings: 'Paramètres actuels',
        resetOptions: 'Options de réinitialisation',
        resetDefaults: 'Réinitialiser aux valeurs par défaut'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        discover: 'Descubrir',
        library: 'Biblioteca',
        shortcuts: 'Atajos',
        newThread: 'Nuevo hilo'
      },
      search: {
        placeholder: 'Pregunta cualquier cosa...',
        followUp: 'Haz una pregunta de seguimiento...',
        pro: 'Pro'
      },
      main: {
        sources: 'fuentes',
        related: 'Relacionado',
        followUp: 'Hacer pregunta de seguimiento'
      },
      settings: {
        title: 'Configuración',
        subtitle: 'Administra la configuración de tu cuenta y preferencias',
        account: 'Cuenta y perfil',
        accountDesc: 'Administra tu información personal y configuración de perfil',
        notifications: 'Notificaciones',
        notificationsDesc: 'Controla cómo recibes notificaciones',
        privacy: 'Privacidad y seguridad',
        privacyDesc: 'Administra tu configuración de privacidad y preferencias de seguridad',
        dataExport: 'Exportación de datos',
        dataExportDesc: 'Descarga tus datos e historial de búsqueda',
        appearance: 'Apariencia',
        appearanceDesc: 'Personaliza la apariencia de la interfaz',
        language: 'Idioma y región',
        languageDesc: 'Cambia tu idioma y preferencias regionales',
        help: 'Ayuda y soporte',
        helpDesc: 'Obtén ayuda y contacta soporte'
      },
      account: {
        title: 'Configuración de cuenta',
        subtitle: 'Administra la información de tu cuenta y preferencias',
        profile: 'Información del perfil',
        edit: 'Editar',
        fullName: 'Nombre completo',
        username: 'Nombre de usuario',
        email: 'Dirección de correo',
        phone: 'Número de teléfono'
      },
      privacy: {
        title: 'Privacidad y seguridad',
        subtitle: 'Administra tu configuración de privacidad y preferencias de seguridad',
        securitySettings: 'Configuración de seguridad',
        twoFactor: 'Autenticación de dos factores',
        twoFactorDesc: 'Agrega una capa adicional de seguridad a tu cuenta',
        enabled: 'Habilitado',
        disabled: 'Deshabilitado',
        enable: 'Habilitar',
        disable: 'Deshabilitar'
      },
      appearance: {
        title: 'Apariencia',
        subtitle: 'Personaliza cómo se ve y se siente la interfaz',
        theme: 'Tema',
        light: 'Claro',
        lightDesc: 'Interfaz limpia y brillante',
        dark: 'Oscuro',
        darkDesc: 'Fácil para los ojos en poca luz',
        system: 'Sistema',
        systemDesc: 'Coincide con la configuración de tu dispositivo',
        small: 'Pequeño',
        medium: 'Mediano',
        large: 'Grande',
        extraLarge: 'Extra grande',
        compact: 'Compacto',
        compactDesc: 'Más contenido en menos espacio',
        comfortable: 'Cómodo',
        comfortableDesc: 'Espaciado equilibrado y legibilidad',
        spacious: 'Espacioso',
        spaciousDesc: 'Espacio adicional para respirar'
      },
      language: {
        title: 'Idioma',
        subtitle: 'Elige tu idioma preferido',
        currentSettings: 'Configuración actual',
        resetOptions: 'Opciones de reinicio',
        resetDefaults: 'Restablecer valores predeterminados'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        discover: 'Entdecken',
        library: 'Bibliothek',
        shortcuts: 'Verknüpfungen',
        newThread: 'Neuer Thread'
      },
      search: {
        placeholder: 'Fragen Sie alles...',
        followUp: 'Stellen Sie eine Nachfrage...',
        pro: 'Pro'
      },
      main: {
        sources: 'Quellen',
        related: 'Verwandt',
        followUp: 'Nachfrage stellen'
      },
      settings: {
        title: 'Einstellungen',
        subtitle: 'Verwalten Sie Ihre Kontoeinstellungen und Präferenzen',
        account: 'Konto und Profil',
        accountDesc: 'Verwalten Sie Ihre persönlichen Informationen und Profileinstellungen',
        notifications: 'Benachrichtigungen',
        notificationsDesc: 'Steuern Sie, wie Sie Benachrichtigungen erhalten',
        privacy: 'Datenschutz und Sicherheit',
        privacyDesc: 'Verwalten Sie Ihre Datenschutzeinstellungen und Sicherheitspräferenzen',
        dataExport: 'Datenexport',
        dataExportDesc: 'Laden Sie Ihre Daten und Suchverlauf herunter',
        appearance: 'Erscheinungsbild',
        appearanceDesc: 'Passen Sie das Aussehen der Benutzeroberfläche an',
        language: 'Sprache und Region',
        languageDesc: 'Ändern Sie Ihre Sprach- und Regionalpräferenzen',
        help: 'Hilfe und Support',
        helpDesc: 'Erhalten Sie Hilfe und kontaktieren Sie den Support'
      },
      account: {
        title: 'Kontoeinstellungen',
        subtitle: 'Verwalten Sie Ihre Kontoinformationen und Präferenzen',
        profile: 'Profilinformationen',
        edit: 'Bearbeiten',
        fullName: 'Vollständiger Name',
        username: 'Benutzername',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer'
      },
      privacy: {
        title: 'Datenschutz und Sicherheit',
        subtitle: 'Verwalten Sie Ihre Datenschutzeinstellungen und Sicherheitspräferenzen',
        securitySettings: 'Sicherheitseinstellungen',
        twoFactor: 'Zwei-Faktor-Authentifizierung',
        twoFactorDesc: 'Fügen Sie eine zusätzliche Sicherheitsebene zu Ihrem Konto hinzu',
        enabled: 'Aktiviert',
        disabled: 'Deaktiviert',
        enable: 'Aktivieren',
        disable: 'Deaktivieren'
      },
      appearance: {
        title: 'Erscheinungsbild',
        subtitle: 'Passen Sie an, wie die Benutzeroberfläche aussieht und sich anfühlt',
        theme: 'Thema',
        light: 'Hell',
        lightDesc: 'Saubere und helle Benutzeroberfläche',
        dark: 'Dunkel',
        darkDesc: 'Schonend für die Augen bei schwachem Licht',
        system: 'System',
        systemDesc: 'Entspricht Ihren Geräteeinstellungen',
        small: 'Klein',
        medium: 'Mittel',
        large: 'Groß',
        extraLarge: 'Extra groß',
        compact: 'Kompakt',
        compactDesc: 'Mehr Inhalt auf weniger Platz',
        comfortable: 'Komfortabel',
        comfortableDesc: 'Ausgewogener Abstand und Lesbarkeit',
        spacious: 'Geräumig',
        spaciousDesc: 'Zusätzlicher Atemraum'
      },
      language: {
        title: 'Sprache',
        subtitle: 'Wählen Sie Ihre bevorzugte Sprache',
        currentSettings: 'Aktuelle Einstellungen',
        resetOptions: 'Zurücksetzungsoptionen',
        resetDefaults: 'Auf Standardwerte zurücksetzen'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        discover: 'खोजें',
        library: 'लाइब्रेरी',
        shortcuts: 'शॉर्टकट',
        newThread: 'नया थ्रेड'
      },
      search: {
        placeholder: 'कुछ भी पूछें...',
        followUp: 'फॉलो-अप प्रश्न पूछें...',
        pro: 'प्रो'
      },
      main: {
        sources: 'स्रोत',
        related: 'संबंधित',
        followUp: 'फॉलो-अप पूछें'
      },
      settings: {
        title: 'सेटिंग्स',
        subtitle: 'अपनी खाता सेटिंग्स और प्राथमिकताएं प्रबंधित करें',
        account: 'खाता और प्रोफ़ाइल',
        accountDesc: 'अपनी व्यक्तिगत जानकारी और प्रोफ़ाइल सेटिंग्स प्रबंधित करें',
        notifications: 'सूचनाएं',
        notificationsDesc: 'नियंत्रित करें कि आप सूचनाएं कैसे प्राप्त करते हैं',
        privacy: 'गोपनीयता और सुरक्षा',
        privacyDesc: 'अपनी गोपनीयता सेटिंग्स और सुरक्षा प्राथमिकताएं प्रबंधित करें',
        dataExport: 'डेटा निर्यात',
        dataExportDesc: 'अपना डेटा और खोज इतिहास डाउनलोड करें',
        appearance: 'दिखावट',
        appearanceDesc: 'इंटरफ़ेस का रूप और अनुभव कस्टमाइज़ करें',
        language: 'भाषा और क्षेत्र',
        languageDesc: 'अपनी भाषा और क्षेत्रीय प्राथमिकताएं बदलें',
        help: 'सहायता और समर्थन',
        helpDesc: 'सहायता प्राप्त करें और समर्थन से संपर्क करें'
      },
      account: {
        title: 'खाता सेटिंग्स',
        subtitle: 'अपनी खाता जानकारी और प्राथमिकताएं प्रबंधित करें',
        profile: 'प्रोफ़ाइल जानकारी',
        edit: 'संपादित करें',
        fullName: 'पूरा नाम',
        username: 'उपयोगकर्ता नाम',
        email: 'ईमेल पता',
        phone: 'फ़ोन नंबर'
      },
      privacy: {
        title: 'गोपनीयता और सुरक्षा',
        subtitle: 'अपनी गोपनीयता सेटिंग्स और सुरक्षा प्राथमिकताएं प्रबंधित करें',
        securitySettings: 'सुरक्षा सेटिंग्स',
        twoFactor: 'दो-कारक प्रमाणीकरण',
        twoFactorDesc: 'अपने खाते में सुरक्षा की एक अतिरिक्त परत जोड़ें',
        enabled: 'सक्षम',
        disabled: 'अक्षम',
        enable: 'सक्षम करें',
        disable: 'अक्षम करें'
      },
      appearance: {
        title: 'दिखावट',
        subtitle: 'इंटरफ़ेस कैसा दिखता और महसूस होता है इसे कस्टमाइज़ करें',
        theme: 'थीम',
        light: 'हल्का',
        lightDesc: 'साफ और उज्ज्वल इंटरफ़ेस',
        dark: 'गहरा',
        darkDesc: 'कम रोशनी में आंखों के लिए आसान',
        system: 'सिस्टम',
        systemDesc: 'आपकी डिवाइस सेटिंग्स से मेल खाता है',
        small: 'छोटा',
        medium: 'मध्यम',
        large: 'बड़ा',
        extraLarge: 'अतिरिक्त बड़ा',
        compact: 'कॉम्पैक्ट',
        compactDesc: 'कम जगह में अधिक सामग्री',
        comfortable: 'आरामदायक',
        comfortableDesc: 'संतुलित स्पेसिंग और पठनीयता',
        spacious: 'विशाल',
        spaciousDesc: 'अतिरिक्त सांस लेने की जगह'
      },
      language: {
        title: 'भाषा',
        subtitle: 'अपनी पसंदीदा भाषा चुनें',
        currentSettings: 'वर्तमान सेटिंग्स',
        resetOptions: 'रीसेट विकल्प',
        resetDefaults: 'डिफ़ॉल्ट पर रीसेट करें'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;