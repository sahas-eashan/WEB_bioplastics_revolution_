export default function Contact() {
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="max-w-md mx-auto space-y-4">
                <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
                <button className="bg-green-700 text-white px-4 py-2 rounded">Send</button>
            </form>
        </div>
    );
}
