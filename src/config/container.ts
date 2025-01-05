import "reflect-metadata";
import { container } from "tsyringe";
import { BookService } from "../services/book.service";
import { BookRepository } from "../repositories/book.repository";

container.register("IBookRepository", { useClass: BookRepository });
container.register("IBookService", { useClass: BookService });

export { container };
