import React, { useState } from 'react';

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<{ text: string; rating: number }[]>([]);
    const [rating, setRating] = useState<number>(0);
    const [commentText, setCommentText] = useState<string>('');

    const submitCommentToAPI = async (comment: { text: string; rating: number }) => {
        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (commentText) {
            const newComment = { text: commentText, rating: Number(rating) }; // Ensure rating is a number
            setComments([...comments, newComment]);
            submitCommentToAPI(newComment); // Call the API submission function
            setCommentText('');
            setRating(0);
        }
    };

    return (
        <div className="comment-section bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment here..."
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    rows="4"
                />
                <div className="mb-2">
                    <label className="mr-2">Rating:</label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
            <div>
                <h3 className="font-bold">Comments:</h3>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index} className="border-b border-gray-300 py-2">
                            <p className="text-gray-700">{comment.text}</p>
                            <p className="text-yellow-500">Rating: {comment.rating} ★</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
