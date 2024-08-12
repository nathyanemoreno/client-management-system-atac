import { NextFunction, Response } from "express";
import { TypedRequest } from "~/common/express";
import { ListClientReqQuery } from "~/types/dtos/client";
import { list } from "~/use-cases/client/list";
import { listClientReqQueryValidate } from "./validate";

export const listClientController = async (
  req: TypedRequest<ListClientReqQuery, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const validated = listClientReqQueryValidate(req.query, next);
    if (validated) {
      const { name, phone, email, limit, offset } = validated;
      const clients = await list({
        name,
        phone,
        email,
        limit,
        offset,
      });

      if (!clients?.length) {
        return res.status(404).json({ message: "No clients found" });
      }
      res.status(200).json(clients);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
