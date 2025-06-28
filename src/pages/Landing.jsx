import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

const Landing = () => {
  const [email, setEmail] = useState('januszjankra@gmail.com')
  const [password, setPassword] = useState('••••••••••••')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr',
      backgroundColor: '#f8fafc'
    }}>
      {/* Left Side - Illustration */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '80px 60px',
        backgroundColor: 'white'
      }}>
        {/* Illustration */}
        <div style={{ 
          marginBottom: '60px',
          position: 'relative'
        }}>
          <div style={{
            width: '400px',
            height: '300px',
            background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Team illustration placeholder */}
            <div style={{
              width: '320px',
              height: '240px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px'
            }}>
              👥
            </div>
          </div>
          
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '-20px',
            width: '60px',
            height: '60px',
            backgroundColor: '#fbbf24',
            borderRadius: '50%',
            opacity: 0.8
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '-30px',
            width: '80px',
            height: '80px',
            backgroundColor: '#34d399',
            borderRadius: '50%',
            opacity: 0.7
          }} />
          
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '-40px',
            width: '40px',
            height: '40px',
            backgroundColor: '#f472b6',
            borderRadius: '50%',
            opacity: 0.6
          }} />
        </div>

        {/* Heading */}
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          color: '#1e293b',
          textAlign: 'center',
          lineHeight: '1.2',
          marginBottom: '24px',
          maxWidth: '500px'
        }}>
          Create and nurture vibrant AI communities.
        </h1>

        {/* Description */}
        <p style={{ 
          fontSize: '18px', 
          color: '#64748b',
          textAlign: 'center',
          lineHeight: '1.6',
          maxWidth: '480px'
        }}>
          Connect with fellow enthusiasts, exchange insights, and collaborate on innovative projects. 
          Join us to revolutionize your AI networking experience!
        </p>
      </div>

      {/* Right Side - Sign In Form */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '80px 60px',
        position: 'relative'
      }}>
        {/* Logo */}
        <div style={{ 
          position: 'absolute',
          top: '40px',
          right: '60px',
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#4f46e5',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            🤖
          </div>
          <span style={{ fontWeight: '700', fontSize: '20px', color: '#1e293b' }}>
            AITribes
          </span>
        </div>

        {/* Sign In Form */}
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: '#1e293b',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              👤 Sign In
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              Sign in to your account to continue.
            </p>
          </div>

          <form onSubmit={handleSignIn} style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Email address"
                style={{ 
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #e2e8f0'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px', position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Password"
                style={{ 
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  paddingRight: '48px'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              marginBottom: '24px' 
            }}>
              <a href="#" style={{ 
                fontSize: '14px', 
                color: '#4f46e5',
                textDecoration: 'none'
              }}>
                🔗 Forgot Password ?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ 
                width: '100%',
                fontSize: '16px',
                padding: '16px'
              }}
            >
              🔐 Sign In
            </button>
          </form>

          {/* Language Selection */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '12px',
            marginBottom: '20px'
          }}>
            {languages.slice(0, 6).map((lang) => (
              <button
                key={lang.code}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: '12px',
                  color: '#64748b',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#4f46e5'
                  e.target.style.backgroundColor = '#f8fafc'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.backgroundColor = 'white'
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '12px'
          }}>
            {languages.slice(6).map((lang) => (
              <button
                key={lang.code}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: '12px',
                  color: '#64748b',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#4f46e5'
                  e.target.style.backgroundColor = '#f8fafc'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.backgroundColor = 'white'
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
