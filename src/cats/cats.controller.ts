
import { Controller, Get, Post, Body, Param, NotFoundException, UseFilters } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { NotFoundExceptionFilter } from 'src/filters/not-found.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':name')
    @UseFilters(new NotFoundExceptionFilter())
    async findOne(@Param('name') name: string) {
        const result = this.catsService.findOne(name);
        if (!result)
            throw new NotFoundException();

        return result
    }
}
