import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Get('admin')
  admin() {
    return this.adminService.admin();
  }
}