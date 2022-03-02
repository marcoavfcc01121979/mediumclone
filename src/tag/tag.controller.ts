/* eslint-disable prettier/prettier */
import { TagService } from './tag.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  /*@Get()
  async findAll(): Promise<TagEntity[]> {
    return await this.tagService.findAll();
  }*/

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();

    return {
      tags: tags.map((tag) => tag.nome)
    }
  }
}
