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
      entities: [User, Company, UserBranchesBranch, Branch],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    BranchModule,
    UserBranchesBranchModule,
  ],
})
export class AppModule {}
