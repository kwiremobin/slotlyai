import { ShellMainAppDir } from "app/(use-page-wrapper)/(main-nav)/ShellMainAppDir";
import type { PageProps } from "app/_types";
import { _generateMetadata, getTranslate } from "app/_utils";
import { redirect } from "next/navigation";
import { z } from "zod";

import { validStatuses } from "~/bookings/lib/validStatuses";
import BookingsList from "~/bookings/views/bookings-listing-view";

const querySchema = z.object({
  status: z.enum(validStatuses),
});

export const generateMetadata = async () =>
  await _generateMetadata(
    (t) => t("bookings"),
    (t) => t("bookings_description")
  );

const Page = async ({ params }: PageProps) => {
  const parsed = querySchema.safeParse(await params);
  console.log("Before parsing: " + JSON.stringify(await params));
  if (!parsed.success) {
    console.log("parsed:" + JSON.stringify(parsed));
    redirect("/bookings/upcoming");
  }
  const t = await getTranslate();
  console.log("bookings status");
  return (
    <ShellMainAppDir heading={t("bookings")} subtitle={t("bookings_description")}>
      <BookingsList status={parsed.data.status} />
    </ShellMainAppDir>
  );
};

export default Page;
