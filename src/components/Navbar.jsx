import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Ocean’s Gift</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/impact" className="hover:underline">Impact</Link>
                <Link to="/team" className="hover:underline">Team</Link>
                <Link to="/events" className="hover:underline">Events</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    );
}
