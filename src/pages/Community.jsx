import React, { useState } from 'react'
import { 
  Users, 
  Search, 
  Plus,
  MoreHorizontal,
  Calendar,
  Eye,
  Settings as SettingsIcon
} from 'lucide-react'
import AdminMenu from '../components/AdminMenu'

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const communities = [
    {
      id: 1,
      name: 'PATRON',
      category: 'Subscription Services',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '28 Feb, 2025',
      isActive: true,
      description: 'Premium subscription service for exclusive content and features.'
    },
    {
      id: 2,
      name: 'Homohumanicus',
      category: 'Health and Wellness',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '13 Feb, 2025',
      isActive: true,
      description: 'A community focused on human wellness and holistic health approaches.'
    },
    {
      id: 3,
      name: 'Ziołolecznictwo',
      category: 'Health and Wellness',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '5 Feb, 2025',
      isActive: true,
      description: 'Herbal medicine and natural healing community for traditional remedies.'
    },
    {
      id: 4,
      name: 'Przedsiębiorcy RP',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '4 Feb, 2025',
      isActive: true,
      description: 'A Entrepreneurship community is a dynamic group of individuals focused on starting and growing businesses.'
    },
    {
      id: 5,
      name: 'Narodowa Agencja Informacyjna',
      category: 'Information Services',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '28 Nov, 2024',
      isActive: true,
      description: 'Społeczność w NAI są grupy społeczne, które prezentują projekty podlegające ocenie pod kątem ich transformacyj...',
      hasMembers: true
    },
    {
      id: 6,
      name: 'Wolność i Przedsiębiorczość',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '27 Nov, 2024',
      isActive: true,
      description: 'Społeczność w Agencji "Bank Zaufania" są grupy społeczne, które prezentują projekty podlegające ocenie pod kąt...'
    },
    {
      id: 7,
      name: 'Agencja Społecznych Konsultantów',
      category: 'Consulting',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '25 Oct, 2024',
      isActive: true,
      description: 'Agencja Społecznych Konsultantów zrzesza wizjonerskich członków, których misją jest projektowanie biegu zdarzeń...'
    },
    {
      id: 8,
      name: 'TOKmate',
      category: 'Business Services',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '21 Oct, 2024',
      isActive: true,
      description: 'Tokmate Agency Service offers a complete solution for businesses and creators to dominate TikTok with ease. As t...',
      hasMembers: true
    },
    {
      id: 9,
      name: 'Ekspert Wellness.',
      category: 'Health and Wellness',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2',
      date: '18 Sep, 2024',
      isActive: true,
      description: '"Ekspert Wellness jako nowy zawód dostępny dla wszystkich" Celem społeczności jest ocenianie wszelkich materiał...'
    }
  ]

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              color: '#4f46e5',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              👥 Community
            </a>
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#64748b',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                📊 Reseller ▼
              </button>
              {showDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '8px',
                  minWidth: '150px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 10
                }}>
                  <div style={{ padding: '8px 12px', fontSize: '14px', color: '#374151' }}>
                    Manage Client
                  </div>
                  <div style={{ padding: '8px 12px', fontSize: '14px', color: '#374151' }}>
                    Team Member
                  </div>
                  <div style={{ padding: '8px 12px', fontSize: '14px', color: '#374151' }}>
                    Reseller
                  </div>
                </div>
              )}
            </div>
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
            <a href="/integrations" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#64748b',
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
            <AdminMenu />
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
            <div style={{
              backgroundColor: '#4f46e5',
              borderRadius: '8px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={20} color="white" />
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
              Community
            </h1>
            <span style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              9
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <Search 
                size={20} 
                color="#9ca3af" 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)' 
                }} 
              />
              <input
                type="text"
                placeholder="Search by Community Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '12px 16px 12px 44px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  width: '300px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Search Button */}
            <button style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Search
            </button>

            {/* New Community Button */}
            <button style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Plus size={16} />
              New Community
            </button>
          </div>
        </div>

        {/* Communities Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
          gap: '24px' 
        }}>
          {filteredCommunities.map((community) => (
            <div
              key={community.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Community Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={community.image}
                  alt={community.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
                {community.id === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4f46e5'
                  }}>
                    PATRON
                  </div>
                )}
              </div>

              {/* Community Content */}
              <div style={{ padding: '20px' }}>
                {/* Header */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '12px' 
                }}>
                  <div>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: '600', 
                      color: '#1e293b',
                      marginBottom: '4px'
                    }}>
                      {community.name}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#64748b'
                    }}>
                      {community.category}
                    </p>
                  </div>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '4px'
                  }}>
                    <MoreHorizontal size={20} color="#64748b" />
                  </button>
                </div>

                {/* Description */}
                <p style={{ 
                  fontSize: '14px', 
                  color: '#374151',
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}>
                  {community.description}
                </p>

                {/* Footer */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    color: '#64748b'
                  }}>
                    <Calendar size={16} />
                    {community.date}
                    {community.hasMembers && (
                      <>
                        <div style={{ 
                          width: '4px', 
                          height: '4px', 
                          backgroundColor: '#d1d5db', 
                          borderRadius: '50%' 
                        }} />
                        <Eye size={16} />
                        <span>2</span>
                      </>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Toggle Switch */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px' 
                    }}>
                      <div style={{
                        width: '44px',
                        height: '24px',
                        backgroundColor: community.isActive ? '#4f46e5' : '#d1d5db',
                        borderRadius: '12px',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: '2px',
                          left: community.isActive ? '22px' : '2px',
                          transition: 'left 0.2s ease',
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                        }} />
                      </div>
                    </div>

                    {/* Actions Button */}
                    <button style={{
                      backgroundColor: '#4f46e5',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      Actions ▼
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCommunities.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: '#64748b'
          }}>
            <Users size={48} color="#d1d5db" style={{ marginBottom: '16px' }} />
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '8px',
              color: '#374151'
            }}>
              No communities found
            </h3>
            <p style={{ fontSize: '14px' }}>
              Try adjusting your search terms or create a new community.
            </p>
          </div>
        )}
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

export default Community
