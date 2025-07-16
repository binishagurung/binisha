function FruitList() {
  const fruits = [
    { name: "Apple", emoji: "🍎", color: "#ffebee" },
    { name: "Banana", emoji: "🍌", color: "#fff9c4" },
    { name: "Mango", emoji: "🥭", color: "#ffe0b2" },
    { name: "Grapes", emoji: "🍇", color: "#e1bee7" },
    { name: "Orange", emoji: "🍊", color: "#ffe0b2" }
  ];

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>🍓 Fruit List</h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}>
        {fruits.map((fruit, index) => (
          <div
            key={index}
            style={{
              backgroundColor: fruit.color,
              width: '250px',
              padding: '15px 25px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              fontSize: '18px',
              fontWeight: '500',
              color: '#4a4a4a',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            {fruit.emoji} {fruit.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FruitList;


