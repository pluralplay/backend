import { StreamSettingsObject } from '@common/helpers/xray-config/interfaces/transport.config';

export interface IFormattedHost {
    address: string;
    alpn: string;
    fingerprint: string;
    host: string;
    network: StreamSettingsObject['network'];
    password: {
        ssPassword: string;
        trojanPassword: string;
        vlessPassword: string;
    };
    path: string;
    publicKey: string;
    port: number;
    protocol: string;
    remark: string;
    shortId: string;
    sni: string;
    spiderX: string;
    tls: string;
    headerType?: string;
    additionalParams?: {
        mode?: string;
        heartbeatPeriod?: number;
    };
    xHttpExtraParams?: null | object;
    muxParams?: null | object;
    sockoptParams?: null | object;
    serverDescription?: string;
}
