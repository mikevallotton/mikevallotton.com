import { NextResponse } from "next/server";
import { siteConfig } from "../../content/siteConfig";

export function GET() {
  return NextResponse.redirect(siteConfig.siteUrl, 302);
}
