
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(name: string): Cat {
        return this.cats.find(x => x.name === name);
    }
    findByAge(age: number): Cat[] {
        return this.cats.filter(x => x.age === age);
    }
}
