import React from 'react';

interface KnowledgePanelProps {
  isDark?: boolean;
}

export const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ isDark = false }) => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRALrgLacCX-kQ1y5uOBCBkV0JLTJZLhR7UAg4KC52mCBgibh0M-tRhLkxlTVwyyDmt2mu5cOcf2AOxAwmNbb-GE06ZiJeqCLX7dotYXz8A&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1FBYkfhgcvScte8CM3FljyF3XUpBJu7jUs7Skoces457Yg1hsRGq7A-euSCvaBD5vcNK5ZTtztewHrYLmWxleJ9ojEika5qCgaDjiUjKAg&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_Ki-Zf6-WkXUlCIhGYGvVUfI4TOt3iky8LzeKG-_gubmqRG2OZFmJ44Zazh22dZ2zaZ1KkOajjt646YGxPCOsRjHttapx2W-AoPb6xPiSg&s=10'
  ];

  return (
    <div style={{
      width: '385px',
      marginLeft: '32px',
      padding: '20px',
      border: '1px solid #dadce0',
      borderRadius: '8px',
      backgroundColor: isDark ? '#1f1f1f' : '#fff',
      boxShadow: '0 1px 6px rgba(32,33,36,.28)'
    }}>
      {/* Title */}
      <div style={{ marginBottom: '12px' }}>
        <h2 style={{
          fontSize: '30px',
          fontWeight: 400,
          margin: 0,
          color: isDark ? '#e8eaed' : '#202124',
          lineHeight: '1.2'
        }}>
          Toddy Smith
        </h2>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#bdc1c6' : '#5f6368',
          marginTop: '4px'
        }}>
          Writer
        </div>
      </div>

      {/* Images Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4px',
        marginBottom: '16px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <div style={{ gridRow: 'span 2' }}>
          <img
            src={images[0]}
            alt="Toddy Smith"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div>
          <img
            src={images[1]}
            alt="Toddy Smith"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div>
          <img
            src={images[2]}
            alt="Toddy Smith"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Description */}
      <div style={{
        fontSize: '14px',
        color: isDark ? '#bdc1c6' : '#4d5156',
        lineHeight: '1.58',
        marginBottom: '16px'
      }}>
        Toddy Smith is a performer, writer and leading digital content creator (and member of the Vlog Squad) who has amassed a following of over 4 million adoring fans. Toddy uses his eccentric storytelling to share a glimpse into his and his friends' lives through vlogs and other comedic content across his social channels.
      </div>

      {/* Source */}
      <div style={{
        fontSize: '12px',
        color: isDark ? '#9aa0a6' : '#70757a',
        marginBottom: '16px'
      }}>
        Source: Google Books
      </div>

      {/* Age Section */}
      <div style={{
        borderTop: `1px solid ${isDark ? '#3c4043' : '#ebebeb'}`,
        paddingTop: '12px',
        marginBottom: '12px'
      }}>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#e8eaed' : '#202124',
          fontWeight: 500,
          marginBottom: '4px'
        }}>
          34 years
        </div>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#bdc1c6' : '#5f6368'
        }}>
          Apr 11, 1991
        </div>
      </div>

      {/* Books Section */}
      <div style={{
        borderTop: `1px solid ${isDark ? '#3c4043' : '#ebebeb'}`,
        paddingTop: '12px',
        marginBottom: '12px'
      }}>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#e8eaed' : '#202124',
          fontWeight: 500,
          marginBottom: '4px'
        }}>
          Books
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '8px'
        }}>
          <div>
            <div style={{
              fontSize: '14px',
              color: isDark ? '#8ab4f8' : '#1a0dab',
              textDecoration: 'none'
            }}>
              I'll Give You a Dollar If You...
            </div>
            <div style={{
              fontSize: '12px',
              color: isDark ? '#9aa0a6' : '#70757a',
              marginTop: '2px'
            }}>
              2019
            </div>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: isDark ? '#9aa0a6' : '#70757a' }}>
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Parents Section */}
      <div style={{
        borderTop: `1px solid ${isDark ? '#3c4043' : '#ebebeb'}`,
        paddingTop: '12px'
      }}>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#e8eaed' : '#202124',
          fontWeight: 500,
          marginBottom: '4px'
        }}>
          Parents
        </div>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#bdc1c6' : '#5f6368',
          marginTop: '4px'
        }}>
          Jane Brodie, Murray Denys Stockley-Smith
        </div>
      </div>
    </div>
  );
};
