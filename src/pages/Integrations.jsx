import React, { useState } from 'react'
import { 
  Settings, 
  CheckCircle,
  Circle
} from 'lucide-react'

const Integrations = () => {
  const [activeTab, setActiveTab] = useState('OpenAI')
  const [selectedCommunity, setSelectedCommunity] = useState('Community')

  const tabs = [
    { id: 'OpenAI', label: 'OpenAI', icon: '🤖' },
    { id: 'Payment', label: 'Payment', icon: '💳' },
    { id: 'Autoresponder', label: 'Autoresponder', icon: '📧' },
    { id: 'Webinar', label: 'Webinar', icon: '🎥' },
    { id: 'Others', label: 'Others', icon: '⚙️' }
  ]

  const integrations = {
    OpenAI: [
      {
        id: 'openai',
        name: 'OpenAI',
        description: 'OpenAI Configurations',
        icon: '🤖',
        connected: true,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#000',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid white',
              borderRadius: '50%',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute',
                top: '2px',
                left: '2px',
                width: '8px',
                height: '8px',
                backgroundColor: '#000',
                borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '8px',
                height: '8px',
                backgroundColor: '#000',
                borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '2px',
                left: '2px',
                width: '8px',
                height: '8px',
                backgroundColor: '#000',
                borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '8px',
                height: '8px',
                backgroundColor: '#000',
                borderRadius: '50%'
              }} />
            </div>
          </div>
        )
      }
    ],
    Payment: [
      {
        id: 'stripe',
        name: 'Stripe',
        description: 'Payment Processing',
        icon: '💳',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#635bff',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            S
          </div>
        )
      },
      {
        id: 'paypal',
        name: 'PayPal',
        description: 'Payment Processing',
        icon: '💰',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#0070ba',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            P
          </div>
        )
      }
    ],
    Autoresponder: [
      {
        id: 'mailchimp',
        name: 'Mailchimp',
        description: 'Email Marketing',
        icon: '📧',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#ffe01b',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            M
          </div>
        )
      },
      {
        id: 'convertkit',
        name: 'ConvertKit',
        description: 'Email Marketing',
        icon: '✉️',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#fb6970',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            C
          </div>
        )
      }
    ],
    Webinar: [
      {
        id: 'zoom',
        name: 'Zoom',
        description: 'Video Conferencing',
        icon: '🎥',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#2d8cff',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            Z
          </div>
        )
      },
      {
        id: 'webinarjam',
        name: 'WebinarJam',
        description: 'Webinar Platform',
        icon: '📹',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#ff6b35',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            W
          </div>
        )
      }
    ],
    Others: [
      {
        id: 'zapier',
        name: 'Zapier',
        description: 'Automation Platform',
        icon: '⚡',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#ff4a00',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            Z
          </div>
        )
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Team Communication',
        icon: '💬',
        connected: false,
        logo: (
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#4a154b',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            S
          </div>
        )
      }
    ]
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e2e8f0',
        padding: '12px 0'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            <span style={{ fontWeight: '700', fontSize: '18px', color: '#1e293b' }}>
              AITribes
            </span>
            <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '4px' }}>
              ENTERPRISE
            </span>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="/dashboard" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              🏠 Dashboard
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              👥 Community
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              📊 Reseller
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              📈 Analytics
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#4f46e5',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              🔧 Integrations
            </a>
          </nav>

          {/* User Profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '20px' }}>🔔</div>
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
              alt="Profile"
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ padding: '32px 20px' }}>
        {/* Page Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '32px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Settings size={24} color="#4f46e5" />
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
              Integrations
            </h1>
          </div>

          {/* Community Selector */}
          <div style={{ position: 'relative' }}>
            <select 
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
              style={{
                padding: '8px 32px 8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white',
                fontSize: '14px',
                color: '#374151',
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
                backgroundPosition: 'right 8px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px'
              }}
            >
              <option value="Community">Community</option>
              <option value="PATRON">PATRON</option>
            </select>
          </div>
        </div>

        {/* Integration Tabs */}
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          {/* Tab Navigation */}
          <div style={{ 
            borderBottom: '1px solid #e2e8f0',
            padding: '0 24px'
          }}>
            <div style={{ display: 'flex', gap: '0' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '16px 24px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: activeTab === tab.id ? '#4f46e5' : '#64748b',
                    borderBottom: activeTab === tab.id ? '2px solid #4f46e5' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ padding: '32px 24px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: '24px' 
            }}>
              {integrations[activeTab]?.map((integration) => (
                <div
                  key={integration.id}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  {/* Integration Logo */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginBottom: '16px' 
                  }}>
                    {integration.logo}
                  </div>

                  {/* Integration Info */}
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#1e293b',
                    marginBottom: '8px'
                  }}>
                    {integration.name}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#64748b',
                    marginBottom: '16px'
                  }}>
                    {integration.description}
                  </p>

                  {/* Connection Status */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: integration.connected ? '#dcfce7' : '#f3f4f6',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: integration.connected ? '#166534' : '#6b7280'
                  }}>
                    {integration.connected ? (
                      <>
                        <CheckCircle size={16} />
                        Connected
                      </>
                    ) : (
                      <>
                        <Circle size={16} />
                        Not Connected
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State for tabs with no integrations */}
            {(!integrations[activeTab] || integrations[activeTab].length === 0) && (
              <div style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                color: '#64748b'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {tabs.find(tab => tab.id === activeTab)?.icon}
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  color: '#374151'
                }}>
                  No {activeTab} integrations available
                </h3>
                <p style={{ fontSize: '14px' }}>
                  Check back later for new integrations in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid #e2e8f0',
        padding: '20px 0',
        marginTop: '60px',
        backgroundColor: 'white'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <div>2025 © AITribes</div>
          <div>Support</div>
        </div>
      </footer>
    </div>
  )
}

export default Integrations
