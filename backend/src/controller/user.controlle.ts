import { Request, Response } from 'express';
import User from '../models/user';
import argon from 'argon2';

export const users = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const registration = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const userExist = await User.findOne({ userName });
    if (userExist) {
      res.status(403).json({ message: 'User already exists' });
    }

    const hashPassword = await argon.hash(password);
    const user = new User({
      email,
      userName,
      password: hashPassword,
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(`User controller error - ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
       res.status(404).json({ message: 'User does not exist' });
    }

    const passMatch = await argon.verify(userExist?.password || "", password);
    if (!passMatch) {
       res.status(401).json({ message: 'Authentication failed' });
    }

    res.status(200).json({ message: 'Login successful', user: userExist });
  } catch (error) {
    console.error(`Login error - ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};
