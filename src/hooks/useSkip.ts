import { useState, useEffect } from "react";
import axios from "axios";
import type { Skip } from "../types/skip";

export const useSkip = () =>{
    const [skips, setSkips] = useState<Skip[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSkips = async () => {
      try {
        const response = await axios.get<Skip[]>(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setSkips(response.data);
      } catch (err) {
        setError("Error on Getting Data");
      } finally {
        setLoading(false);
      }
    };

    useEffect(()=>{
        fetchSkips();
    },[])

    return  { skips, error, loading };
}