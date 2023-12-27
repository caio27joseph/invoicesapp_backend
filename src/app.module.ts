import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GraphQlModule } from './graphql/graphql.module';

@Module({
  imports: [DatabaseModule, GraphQlModule, AuthModule, UsersModule],
  providers: [],
  exports: [],
})
export class AppModule {}
