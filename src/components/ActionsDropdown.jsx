import React, { useState, useRef, useEffect } from 'react'
import { 
  ChevronDown,
  Edit3,
  ExternalLink,
  Settings,
  Copy,
  Bot,
  MessageSquare
} from 'lucide-react'

const ActionsDropdown = ({ communityId, onAction }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleActionClick = (action) => {
    setIsOpen(false)
    if (onAction) {
      onAction(action, communityId)
    }
  }

  const actions = [
    {
      id: 'edit',
      label: 'Edit',
      icon: Edit3,
      color: '#374151'
    },
    {
      id: 'visit',
      label: 'Visit',
      icon: ExternalLink,
      color: '#374151'
    },
    {
      id: 'customize',
      label: 'Customize Community',
      icon: Settings,
      color: '#374151'
    },
    {
      id: 'clone',
      label: 'Clone',
      icon: Copy,
      color: '#374151'
    },
    {
      id: 'ai-member-feed',
      label: 'AI Member Feed',
      icon: Bot,
      color: '#374151'
    },
    {
      id: 'ai-custom-prompt',
      label: 'AI Custom Prompt Feed',
      icon: MessageSquare,
      color: '#374151'
    }
  ]

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          minWidth: '80px',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#4338ca'
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#4f46e5'
        }}
      >
        Actions
        <ChevronDown 
          size={16} 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }} 
        />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '4px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid #e5e7eb',
          minWidth: '220px',
          zIndex: 50,
          overflow: 'hidden'
        }}>
          <div style={{ padding: '8px 0' }}>
            {actions.map((action, index) => {
              const IconComponent = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => handleActionClick(action.id)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: action.color,
                    transition: 'background-color 0.2s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  <IconComponent size={16} />
                  {action.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ActionsDropdown
