import { useState, useEffect } from "react";

const Result = () => {
    const [pollData, setPollData] = useState([
        { option: 'Option 1', votes: 9 },
        { option: 'Option 2', votes: 3 },
        { option: 'Option 3', votes: 2 },
        { option: 'Option 4', votes: 1 },
        { option: 'Option 5', votes: 0 }
    ]);

    const totalVotes = pollData.reduce((acc, item) => acc + item.votes, 0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPollData(prevData => {
                const newData = [...prevData];
                const randomIndex = Math.floor(Math.random() * newData.length);
                newData[randomIndex].votes += 1;
                return newData;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[700px] h-[490px] mx-auto my-auto">
            <div className="flex items-center mb-4">
                <h1 className="text-xl font-bold">Poll Results 📊</h1>
            </div>
            <p className="text-lg mb-3">Question</p>
            <p className="text-white-400 mb-4">by User • 45 minutes ago</p>
            {pollData.map((item, index) => {
                const percentage = ((item.votes / totalVotes) * 100).toFixed(2);
                const bgColor = index % 2 === 0 ? 'bg-blue-400' : 'bg-blue-200';
                const textColor = index % 2 === 0 ? 'text-blue-400' : 'text-blue-200';
                return (
                    <div key={index} className="mb-4">
                        <p className={`${textColor}`}>{item.option} • {percentage}% • {item.votes} votes</p>
                        <div className={`${bgColor} h-2 rounded-full mb-2`} style={{ width: `${percentage}%` }}></div>
                    </div>
                );
            })}
            <p className="mb-4">Total votes: {totalVotes} (from {pollData.length} participants)</p>
            <div className="flex justify-between items-center">
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg">Back to Poll</button>
                <button className="bg-red-700 text-white px-4 py-2 rounded-lg">Share</button>
            </div>
        </div>
    );
};

export default Result;