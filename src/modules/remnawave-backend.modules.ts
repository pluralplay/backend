import { ConditionalModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { isRestApi, isScheduler } from '@common/utils/startup-app';

import { NodesTrafficUsageHistoryModule } from './nodes-traffic-usage-history/nodes-traffic-usage-history.module';
import { NodesUserUsageHistoryModule } from './nodes-user-usage-history/nodes-user-usage-history.module';
import { SubscriptionTemplateModule } from './subscription-template/subscription-template.module';
import { SubscriptionSettingsModule } from './subscription-settings/subscription-settings.module';
import { UserTrafficHistoryModule } from './user-traffic-history/user-traffic-history.module';
import { NodesUsageHistoryModule } from './nodes-usage-history/nodes-usage-history.module';
import { RemnawaveServiceModule } from './remnawave-service/remnawave-service.module';
import { HwidUserDevicesModule } from './hwid-user-devices/hwid-user-devices.module';
import { ConfigProfileModule } from './config-profiles/config-profile.module';
import { InternalSquadModule } from './internal-squads/internal-squad.module';
import { InfraBillingModule } from './infra-billing/infra-billing.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ApiTokensModule } from './api-tokens/api-tokens.module';
import { KeygenModule } from './keygen/keygen.module';
import { SystemModule } from './system/system.module';
import { HostsModule } from './hosts/hosts.module';
import { NodesModule } from './nodes/nodes.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConditionalModule.registerWhen(AdminModule, () => isRestApi()),
        ConditionalModule.registerWhen(AuthModule, () => isRestApi()),
        UsersModule,
        ConditionalModule.registerWhen(SubscriptionModule, () => isRestApi()),
        ConditionalModule.registerWhen(ApiTokensModule, () => isRestApi()),
        ConfigProfileModule,
        InternalSquadModule,
        KeygenModule,
        NodesModule,
        NodesTrafficUsageHistoryModule,
        HostsModule,
        UserTrafficHistoryModule,
        NodesUserUsageHistoryModule,
        HwidUserDevicesModule,
        NodesUsageHistoryModule,
        InfraBillingModule,
        ConditionalModule.registerWhen(SystemModule, () => isRestApi()),
        ConditionalModule.registerWhen(SubscriptionTemplateModule, () => isRestApi()),
        ConditionalModule.registerWhen(SubscriptionSettingsModule, () => isRestApi()),
        ConditionalModule.registerWhen(RemnawaveServiceModule, () => isScheduler()),
    ],
})
export class RemnawaveModules {}
