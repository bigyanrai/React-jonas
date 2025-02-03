import { getBookedDatesByCabinId } from "@/app/_lib/data-service";

export async function GET(req, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] =
      Promise.all[(getCabin(cabinId), getBookedDatesByCabinId(cabinId))];
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({
      message: "cabin not found",
    });
  }
}
