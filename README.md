# TFT-Wizard

# Reason

This project combines my interest in Teamfight Tactics with data analysis.

It serves as a practical application of data analysis techniques while also
providing an opportunity to explore Cursor's capabilities, particularly in
managing and updating both global and project-specific rules.

As a user, I want to:
- Input my current game state (units, items, gold, game progress) to find optimal team compositions
- Select units from a comprehensive list to update my game state
- Add both completed items and components to track my inventory
- View win rates and pick rates for recommended team compositions
- Search for team compositions based on a specific carry unit I want to play
- Receive real-time recommendations as I update my game state
- See a ranked list of the best possible team compositions for my situation
- View a timeline of recommended actions (level up, roll down, econ) based on my game state
- Get positioning suggestions for my current team composition
- See which items are optimal for my carries and who should hold temporary items
- Analyze my economy and receive suggestions for gold management
- Get alerts for important power spikes and timing windows
- Track my match history and performance with different compositions
- Receive suggestions for early-game transitions that align with my desired end-game comp
- View win conditions and key units needed for each recommended composition

# Tech Stack
```
TFT-Wizard/
├── frontend/                 # SvelteJS
│   ├── src/
│   │   ├── components/
│   │   ├── stores/
│   │   └── routes/
├── backend-core/            # Java + Spring Boot
│   ├── api/
│   ├── services/
│   └── data/
└── backend-analytics/       # Rust (Future)
    ├── composition-engine/
    └── real-time-analyzer/
```