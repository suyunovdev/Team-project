import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing user session on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            // Simulate API call - replace with actual API endpoint
            // For demo purposes, accepting any email/password
            const mockUser = {
                id: Date.now(),
                name: email.split("@")[0],
                email: email,
            };

            const mockToken = "mock-jwt-token-" + Date.now();

            // Store in localStorage
            localStorage.setItem("user", JSON.stringify(mockUser));
            localStorage.setItem("token", mockToken);

            setUser(mockUser);
            return { success: true, user: mockUser };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const register = async (name, email, password) => {
        try {
            // Simulate API call - replace with actual API endpoint
            const mockUser = {
                id: Date.now(),
                name: name,
                email: email,
            };

            // For registration, we'll just store the user
            // In real app, you'd send to backend and get token
            localStorage.setItem("registeredUser", JSON.stringify(mockUser));

            return { success: true, message: "Registration successful! Please login." };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    const value = {
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        loading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
