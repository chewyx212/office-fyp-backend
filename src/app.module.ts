import { DeskSchedule } from './desk-schedule/desk-schedule.entity';
import { Announcement } from './announcement/announcement.entity';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { BranchModule } from './branch/branch.module';
import { UserBranchesBranchModule } from './user-branches-branch/user-branches-branch.module';
import { User } from './auth/user.entity';
import { Company } from './company/company.entity';
import { UserBranchesBranch } from './user-branches-branch/user-branches-branch.entity';
import { Branch } from './branch/branch.entity';
import { AreaModule } from './area/area.module';
import { RoomModule } from './room/room.module';
import { DeskModule } from './desk/desk.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { Area } from './area/area.entity';
import { Room } from './room/room.entity';
import { DeskScheduleModule } from './desk-schedule/desk-schedule.module';
import { Desk } from './desk/desk.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'abcd1234',
      database: 'spaceb',
      entities: [
        User,
        Company,
        UserBranchesBranch,
        Branch,
        Area,
        Desk,
        DeskSchedule,
        Room,
        Announcement,
        DeskSchedule,
      ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    BranchModule,
    UserBranchesBranchModule,
    AreaModule,
    RoomModule,
    DeskModule,
    AnnouncementModule,
    DeskScheduleModule,
  ],
})
export class AppModule {}
