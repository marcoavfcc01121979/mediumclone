import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { User } from '../user/decorators/user.decorator';
import { ProfileResponseInterface } from './types/profileResponse.interface';
import { AuthGuard } from '../user/guards/auth.guard';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get(':username')
  async getProfile(
    // @User('id') currentUserId: number, 
    @Param('username') profileUsername: string,
  ): Promise<ProfileResponseInterface> {
    // const profile = await this.profileService.getProfile(currentUserId, profileUsername)
    const profile = await this.profileService.getProfile(profileUsername)

    return this.profileService.buildProfileResponse(profile);
  }

  @Post(':username/follow')
  @UseGuards(AuthGuard)
  async followProfile(
    @User('id') currentUser: number, 
    @Param('username') profileUser: string): Promise<ProfileResponseInterface> {
    const profile = await this.profileService.followProfile(currentUser, profileUser)
    // const profile = await this.profileService.getProfile(profileUser)

    return this.profileService.buildProfileResponse(profile);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
