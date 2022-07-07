import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database";
import { Entry, IEntry } from "../../../../models";

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El ID no es valido." + id });
  }
  switch (req.method) {
    case "GET":
      return getEntry(req, res);
    case "PUT":
      return updateEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ message: "El metodo no existe." });
  }
}
const updateEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  await db.connect();
  const { id } = req.query;
  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "No exite el id Buscado." });
  }
  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;
  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    return res.status(200).json(updateEntry!);
  } catch (error: any) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: error.errors.status.message });
  }
};
const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entry = await Entry.findById(id);
  await db.disconnect();
  if (!entry) {
    return res.status(400).json({ message: "No exite el id Buscado." });
  }
  return res.status(200).json(entry!);
};
const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entry = await Entry.findByIdAndDelete(id);
  await db.disconnect();
  if (!entry) {
    return res.status(400).json({ message: "No exite el id Buscado." + id });
  }
  return res.status(200).json(entry!);
};
