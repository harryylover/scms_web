import { Controller, Get, Post } from '@nestjs/common';

@Controller('ra_v1')
export class Ra_v1Controller {
  @Post('/provision-pseudonym-certificate-batch')
  provision_application_certificat(): string {
    return 'provision-pseudonym-certificate-batch';
  }

  //https://wiki.campllc.org/display/SCP/RA+-+Download+.info+File
  @Get('/download/info')
  download_info(): string {
    return 'download-info';
  }

  //https://wiki.campllc.org/display/SCP/RA+-+Download+Local+Policy+File
  @Get('/download/policy/local')
  download_policy_local(): string {
    return 'download-policy-local';
  }

  // https://wiki.campllc.org/display/SCP/RA+-+Download+Pseudonym+Certificate+Batch
  @Get('/download/batch')
  download_pseudonym_cert_batch(): string {
    return 'download-pseudonym-cert-batch';
  }

  @Get('/retrieve-ra-certificate')
  retrieve_ra_certificate(): string {
    return 'retrieve-ra-certificate';
  }

  @Post('/provision-identity-certificate')
  provision_identity_certificate(): string {
    return 'provision_identity_certificate';
  }

  @Get('/download/identity-certificate')
  download_identity_certificate(): string {
    return 'download-identity-certificate';
  }

  @Post('/provision-application-certificate')
  provision_application_certificate(): string {
    return 'provision_application_certificate';
  }

  @Get('/download/application-certificate')
  download_application_certificate(): string {
    return 'download-application-certificate';
  }

  @Get('/download/local-certificate-chain')
  download_local_certificate_chain(): string {
    return 'download-local-certificate-chain';
  }

  @Post('/process-misbehavior-report')
  process_misbehavior_report(): string {
    return 'process-misbehavior-report';
  }
}
