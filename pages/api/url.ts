// pages/api/record

import { NextApiRequest, NextApiResponse } from "next";
import {
  getLongUrl,
  createRecord,
  updateRecord,
  deleteRecord,
} from "../../prisma/url";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          // Get a single record if id is provided is the query
          // api/url?id=1
          const record = await getLongUrl(req.query.id);
          return res.status(200).json(record);
        }
      }
      case "POST": {
        // Create a new record
        const { id, longUrl } = req.body;
        const record = await createRecord(id, longUrl);
        return res.json(record);
      }
      case "PUT": {
        // Update an existing record
        const { id, ...updateData } = req.body;
        const record = await updateRecord(id, updateData);
        return res.json(record);
      }
      case "DELETE": {
        // Delete an existing record
        const { id } = req.body;
        const record = await deleteRecord(id);
        return res.json(record);
      }
      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
