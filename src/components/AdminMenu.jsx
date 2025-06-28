import React, { useState, useRef, useEffect } from 'react'
import { 
  User, 
  Play, 
  BookOpen, 
  FileText, 
  Globe, 
  Settings, 
  ChevronRight, 
  LogOut,
  CreditCard
} from 'lucide-react'

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const menuRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' }
  ]

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
        setShowLanguageMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    setShowLanguageMenu(false)
  }

  return (
    <div style={{ position: 'relative' }} ref={menuRef}>
      {/* Profile Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          overflow: 'hidden',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <img 
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2"
          alt="Profile"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '8px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid #e5e7eb',
          minWidth: '280px',
          zIndex: 50,
          overflow: 'hidden'
        }}>
          {/* User Info Section */}
          <div style={{
            padding: '20px',
            borderBottom: '1px solid #f3f4f6',
            backgroundColor: '#f9fafb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                alt="Profile"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div style={{ 
                  fontWeight: '600', 
                  fontSize: '16px', 
                  color: '#111827',
                  marginBottom: '2px'
                }}>
                  Janusz Krawczak
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#6b7280'
                }}>
                  januszjankra@gmail.com
                </div>
              </div>
            </div>

            {/* Free Credits */}
            <div style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#374151',
                  marginBottom: '2px'
                }}>
                  Free Credits
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#4f46e5'
                }}>
                  735/1000
                </div>
              </div>
              <CreditCard size={20} color="#6b7280" />
            </div>
          </div>

          {/* Menu Items */}
          <div style={{ padding: '8px 0' }}>
            {/* Profile */}
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <User size={18} />
              Profile
            </button>

            {/* Video Tutorials */}
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <Play size={18} />
              Video tutorials
            </button>

            {/* Knowledgebase */}
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <BookOpen size={18} />
              Knowledgebase
            </button>

            {/* Template Club */}
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <FileText size={18} />
              Template Club
            </button>

            {/* Agency Website */}
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <Globe size={18} />
              Agency Website
            </button>

            {/* DFY Tribe */}
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <Settings size={18} />
              DFY Tribe
            </button>

            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: 'none',
                  backgroundColor: showLanguageMenu ? '#f9fafb' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#4f46e5',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => !showLanguageMenu && (e.target.style.backgroundColor = '#f9fafb')}
                onMouseLeave={(e) => !showLanguageMenu && (e.target.style.backgroundColor = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Globe size={18} />
                  Language
                </div>
                <ChevronRight 
                  size={16} 
                  style={{ 
                    transform: showLanguageMenu ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }} 
                />
              </button>

              {/* Language Submenu */}
              {showLanguageMenu && (
                <div style={{
                  position: 'absolute',
                  left: '100%',
                  top: 0,
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e5e7eb',
                  minWidth: '180px',
                  marginLeft: '8px',
                  zIndex: 60
                }}>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: 'none',
                        backgroundColor: selectedLanguage.code === language.code ? '#f0f9ff' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: selectedLanguage.code === language.code ? '#0369a1' : '#374151',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => selectedLanguage.code !== language.code && (e.target.style.backgroundColor = '#f9fafb')}
                      onMouseLeave={(e) => selectedLanguage.code !== language.code && (e.target.style.backgroundColor = 'transparent')}
                    >
                      <span style={{ fontSize: '16px' }}>{language.flag}</span>
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sign Out */}
          <div style={{ borderTop: '1px solid #f3f4f6', padding: '8px 0' }}>
            <button style={{
              width: '100%',
              padding: '12px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#ef4444',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#fef2f2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminMenu
