const express = require("express");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
class Application {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this._configure();
    }
    _configure() {
        this._setupSecurity();
        this._setupMiddleware();
        this._setupRoutes();
        this._handleInvalidRoutes();
    }
    _setupSecurity() {
        this.app.use(helmet());
        const corsOptions = {
            origin: (origin, callback) => {
                const allowedOrigins = (process.env.CORS_ORIGIN || "").split(",");
                if (process.env.NODE_ENV !== 'production' || !origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
            allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
            credentials: true
        };
        this.app.use(cors(corsOptions));
        const limiter = rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
            standardHeaders: true,
            legacyHeaders: false,
        });
        this.app.use(limiter);
    }
    _setupMiddleware() {
        if (process.env.NODE_ENV === 'development') {
            this.app.use(morgan('dev'));
        }
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                sameSite: 'lax'
            }
        }));
    }
    _setupRoutes() {
        this.app.use('/api/users', require('./routes/users'));
    }
    _handleInvalidRoutes() {
        this.app.use((req, res) => {
            res.status(404).json({ message: "Invalid URL - Not Found" });
        });
    }
}
module.exports = new Application().app;
