import React, { useState } from 'react'
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell,
  Search,
  ChevronDown,
  Calendar,
  MessageSquare,
  FileText,
  TrendingUp,
  Clock
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import AdminMenu from '../components/AdminMenu'

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const salesData = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 2 },
    { month: 'Mar', value: 1 },
    { month: 'Apr', value: 3 },
    { month: 'May', value: 2 },
    { month: 'Jun', value: 4 },
    { month: 'Jul', value: 3 }
  ]

  const membersData = [
    { month: 'Jan', value: 0 },
    { month: 'Feb', value: 2 },
    { month: 'Mar', value: 5 },
    { month: 'Apr', value: 8 },
    { month: 'May', value: 12 },
    { month: 'Jun', value: 10 },
    { month: 'Jul', value: 14 }
  ]

  const recentActivity = [
    {
      id: 1,
      user: 'Janusz',
      action: 'posted new comment',
      time: '2 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2'
    },
    {
      id: 2,
      user: 'Janusz',
      action: 'added a new post',
      time: '2 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2'
    },
    {
      id: 3,
      user: 'Janusz',
      action: 'posted new comment',
      time: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2'
    },
    {
      id: 4,
      user: 'Janusz',
      action: 'added a new post',
      time: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2'
    },
    {
      id: 5,
      user: 'Janusz',
      action: 'posted new comment',
      time: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2'
    },
    {
      id: 6,
      user: 'Phil',
      action: 'joined Advertising',
      time: '4 weeks ago',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2'
    }
  ]

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
              color: '#4f46e5',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              <Home size={16} />
              Dashboard
            </a>
            <a href="/community" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              <Users size={16} />
              Community
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
                <BarChart3 size={16} />
                Reseller
                <ChevronDown size={14} />
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
              <BarChart3 size={16} />
              Analytics
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
              <Settings size={16} />
              Integrations
            </a>
          </nav>

          {/* User Profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Bell size={20} color="#64748b" />
            <AdminMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ padding: '32px 20px' }}>
        {/* Breadcrumb */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '32px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <Home size={16} />
          <span>Dashboard</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          {/* Left Column */}
          <div>
            {/* Community Stats */}
            <div className="card" style={{ marginBottom: '32px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                marginBottom: '24px' 
              }}>
                <span style={{ fontWeight: '600', fontSize: '16px', color: '#1e293b' }}>
                  Community
                </span>
                <span style={{
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  9
                </span>
              </div>

              <div className="grid grid-4">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#f1f5f9', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginBottom: '12px'
                  }}>
                    <FileText size={24} color="#64748b" />
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
                    23
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    Courses
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#f1f5f9', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginBottom: '12px'
                  }}>
                    <Users size={24} color="#64748b" />
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
                    14
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    Members
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#f1f5f9', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginBottom: '12px'
                  }}>
                    <Calendar size={24} color="#64748b" />
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
                    0
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    Events
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#f1f5f9', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginBottom: '12px'
                  }}>
                    <MessageSquare size={24} color="#64748b" />
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
                    56
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    Blog
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-2">
              <div className="card">
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                    📊 My Sales
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>Monthly Data</p>
                </div>
                <div style={{ height: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4f46e5" 
                        strokeWidth={2}
                        dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                    👥 Community Members
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>Monthly Data</p>
                </div>
                <div style={{ height: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={membersData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4f46e5" 
                        strokeWidth={2}
                        dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Sales */}
            <div className="card" style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>
                Recent Sales
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '12px 0', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        COURSE / PRODUCT
                      </th>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '12px 0', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        CUSTOMER NAME
                      </th>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '12px 0', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        ORDER ID
                      </th>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '12px 0', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        SALE AMOUNT
                      </th>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '12px 0', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        CREATED ON
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" style={{ 
                        textAlign: 'center', 
                        padding: '40px 0', 
                        color: '#64748b',
                        fontSize: '14px'
                      }}>
                        No recent sale found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="card">
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              Recent Activity
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
              Community member recent activity
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentActivity.map((activity) => (
                <div key={activity.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    backgroundColor: '#4f46e5', 
                    borderRadius: '50%',
                    flexShrink: 0
                  }} />
                  <img 
                    src={activity.avatar}
                    alt={activity.user}
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', color: '#1e293b' }}>
                      <span style={{ fontWeight: '600' }}>{activity.user}</span>
                      {' '}
                      <span style={{ color: activity.action.includes('joined') ? '#4f46e5' : '#1e293b' }}>
                        {activity.action}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
