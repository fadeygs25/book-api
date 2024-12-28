import { Request, Response } from 'express';
import Book from '../models/book';
import { API_MESSAGES } from '../constants';



export const createBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: API_MESSAGES.SERVER_ERROR });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: API_MESSAGES.SERVER_ERROR });
    }
};

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: API_MESSAGES.BOOK_NOT_FOUND });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: API_MESSAGES.SERVER_ERROR });
    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: API_MESSAGES.BOOK_NOT_FOUND });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: API_MESSAGES.SERVER_ERROR });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: API_MESSAGES.BOOK_NOT_FOUND });
        res.status(200).json({ message: API_MESSAGES.BOOK_DELETED });
    } catch (error) {
        res.status(500).json({ message: API_MESSAGES.SERVER_ERROR });
    }
};
