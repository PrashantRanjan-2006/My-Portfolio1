# Architecture Diagram

The Library Management System is a modular Core Java console application. User commands flow through service operations into a domain model and persistent file storage.

## Application Architecture

<!-- mermaid-checked: no \n, no em-dash/en-dash, no {} in labels, subgraphs are id["label"], arrows are -->|"label"|, all subgraphs closed by end, ids unique -->
~~~mermaid
flowchart TD
    subgraph Client["Client Layer"]
        Console["Console UI"]
    end
    subgraph App["Application Layer - Core Java"]
        Service["Library Service"]
        Domain["Domain Model"]
    end
    subgraph Data["Data Layer"]
        FileStore[("File Storage")]
    end

    Console -->|"commands"| Service
    Service -->|"manages"| Domain
    Domain -->|"persists records"| FileStore
~~~

### Technology Stack Summary

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Client | Java console UI | Core Java | Accepts library management commands |
| Application | Object-oriented service layer | Core Java | Implements CRUD, search, and inventory operations |
| Domain | Books and members | Core Java | Represents library records and rules |
| Data | Persistent file I/O | Java standard library | Stores records between application runs |

### Data Storage & External Services

The application uses local persistent file storage through Java file I/O. It does not depend on a database, cache, message broker, or external API.

### Key Architectural Decisions

- Uses a layered console, service, domain, and storage structure.
- Encapsulates inventory operations behind object-oriented domain logic.
- Keeps persistence local and dependency-free through file I/O.

## Component Relationships

<!-- mermaid-checked: no \n, no em-dash/en-dash, no {} in labels, subgraphs are id["label"], arrows are -->|"label"|, all subgraphs closed by end, ids unique -->
~~~mermaid
flowchart LR
    subgraph PresentationLayer["Presentation"]
        cConsole["Console UI"]
    end
    subgraph BusinessLayer["Business Logic"]
        cService["Library Service"]
        cSearch["Search Operations"]
        cInventory["Inventory Operations"]
    end
    subgraph DataAccessLayer["Data Access"]
        cDomain["Book and Member Model"]
        cStorage["File Storage Adapter"]
    end

    cConsole -->|"delegates"| cService
    cService -->|"coordinates"| cSearch
    cService -->|"coordinates"| cInventory
    cSearch -->|"reads"| cDomain
    cInventory -->|"updates"| cDomain
    cDomain -->|"persists"| cStorage
~~~

### Component Inventory

| Component | Layer | Type | Responsibility |
|---|---|---|---|
| Console UI | Presentation | Console interface | Receives commands and displays results |
| Library Service | Business Logic | Service | Coordinates library operations |
| Search Operations | Business Logic | Operation module | Finds books and records |
| Inventory Operations | Business Logic | Operation module | Adds, updates, and deletes inventory |
| Book and Member Model | Data Access | Domain model | Holds library records |
| File Storage Adapter | Data Access | Persistence adapter | Reads and writes local records |
